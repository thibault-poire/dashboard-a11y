import { spawn } from "node:child_process";

export const start_audit = (
  url: string,
  callbacks?: {
    on_stdout?: (data: string) => void;
    on_stderr?: (data: string) => void;
    on_close?: (code: number | null, stdout: string, stderr: string) => void;
  }
) => {
  const command = spawn(`axe`, [url], { shell: true });
  let stdout = "";
  let stderr = "";

  command.stdout.on("data", (data) => {
    stdout += data;

    callbacks?.on_stdout?.(data);
  });

  command.stderr.on("data", (data) => {
    stderr += data;

    callbacks?.on_stderr?.(data);
  });

  command.on("close", (code) => {
    callbacks?.on_close?.(code, stdout, stderr);
  });
};
