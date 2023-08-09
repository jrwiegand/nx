import { cx } from '@nx/nx-dev/ui-primitives';
import { ReactNode } from 'react';

export function TerminalShellWrapper({
  isMessageBelow,
  children,
}: {
  isMessageBelow: boolean;
  children: ReactNode;
}): JSX.Element {
  return (
    <div
      className={cx(
        'hljs not-prose w-full overflow-x-auto border border-slate-200 bg-slate-50/50 font-mono text-sm dark:border-slate-700 dark:bg-slate-800/60',
        isMessageBelow ? 'rounded-t-lg border-b-0' : 'rounded-lg'
      )}
    >
      <div className="relative flex justify-center border-b border-slate-200 bg-slate-100/50 p-2 text-slate-400 dark:border-slate-700 dark:bg-slate-700/50 dark:text-slate-500">
        <div className="absolute left-2 top-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-400 dark:bg-red-600" />
          <span className="h-2 w-2 rounded-full bg-yellow-400 dark:bg-yellow-600" />
          <span className="h-2 w-2 rounded-full bg-green-400 dark:bg-green-600" />
        </div>
        <span className="h-5"></span>
      </div>
      {children}
    </div>
  );
}
