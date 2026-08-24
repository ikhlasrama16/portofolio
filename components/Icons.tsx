import React from "react";

export function GithubIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function LaravelIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M21.1 6.3 12.3.9c-.3-.2-.7-.2-1 0L2.7 6.3c-.3.2-.5.5-.5.8v10c0 .4.2.7.5.9l8.7 5.3c.2.1.3.1.5.1s.3 0 .5-.1l8.7-5.3c.3-.2.5-.5.5-.9v-10c0-.3-.2-.6-.5-.8zM12 2.7l7 4.2-3.4 2.1-7-4.2L12 2.7zm-8 4.8 6.9 4.1v7.6L4 15.1V7.5zm9 11.7v-7.6l3.4-2.1v7.6l-3.4 2.1zm5-3.1v-7.6l2.1-1.3v7.6L18 16.1z" />
    </svg>
  );
}

export function GolangIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M1.8 10.5c.3-.7.7-1.3 1.3-1.8.6-.5 1.3-.9 2.1-1.1.8-.2 1.6-.2 2.4-.1.8.1 1.6.4 2.3.9l-1.3 1.6c-.5-.4-1.1-.6-1.7-.7-.6 0-1.2.1-1.8.3-.5.2-1 .5-1.4.9-.4.4-.6.9-.8 1.4-.2.5-.2 1.1-.1 1.6.1.6.3 1.1.7 1.5.4.4.8.8 1.4 1 .5.2 1.1.3 1.7.3.7 0 1.4-.2 2-.5v-1.7H7.7v-2h4.5v4.9c-.8.6-1.7 1-2.7 1.2-1 .2-2 .2-3-.1-1-.2-1.9-.7-2.7-1.4-.8-.7-1.4-1.6-1.7-2.6-.4-1.1-.4-2.3-.3-3.4zm16.5-.4c1.1 0 2.2.3 3.1.9.9.6 1.6 1.4 2 2.4.4 1 .5 2.1.3 3.2-.2 1.1-.7 2-1.4 2.8-.7.8-1.7 1.3-2.7 1.6-1.1.3-2.2.3-3.2 0-1.1-.3-2-1-2.7-1.8-.7-.9-1.1-1.9-1.2-3-.1-1.1.1-2.2.6-3.2.5-1 1.3-1.8 2.2-2.3.9-.4 2-.6 3-.6zm0 2c-.6 0-1.3.2-1.8.5-.5.4-.9.9-1.2 1.5-.3.6-.3 1.3-.2 1.9.1.6.4 1.2.8 1.7.4.5 1 .8 1.6 1 .6.2 1.3.1 1.9-.1.6-.2 1.1-.6 1.5-1.1.4-.5.6-1.1.7-1.8 0-.6-.1-1.3-.4-1.8-.3-.6-.7-1-1.2-1.4-.6-.4-1.1-.6-1.7-.6z" />
    </svg>
  );
}

export function PhpIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 4C5.373 4 0 7.582 0 12s5.373 8 12 8 12-3.582 12-8-5.373-8-12-8zm-5.7 11.2h-1.6l1.7-6.4h2.5c1.4 0 2.3.7 2 2-.3 1.2-1.3 1.9-2.6 1.9h-1.1l-.9 2.5zm4.8 0h-1.6l1.7-6.4h1.6l-.6 2.3h1.2c1.4 0 2.3.7 2 2-.3 1.2-1.3 1.9-2.6 1.9h-1.1l-.6 2.2zm7.4-4.5c-.3 1.2-1.3 1.9-2.6 1.9h-1.1l-.9 2.6h-1.6l1.7-6.4h2.5c1.4 0 2.3.7 2 1.9zm-9.9-.9c.2-.7-.2-1-.8-1h-.9l-.5 2h.9c.7 0 1.1-.3 1.3-1zm4.8 0c.2-.7-.2-1-.8-1h-.9l-.5 2h.9c.7 0 1.1-.3 1.3-1zm4.7 0c.2-.7-.2-1-.8-1h-.9l-.5 2h.9c.7 0 1.1-.3 1.3-1z" />
    </svg>
  );
}

export function ReactIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm0-7.5c-4.2 0-7.8 1.4-9.8 3.5-.8.8-1.3 1.7-1.5 2.6-.3 1.1 0 2.3.8 3.3 1.2 1.5 3.3 2.5 5.9 3-2.6.5-4.7 1.5-5.9 3-.8 1-1.1 2.2-.8 3.3.2.9.7 1.8 1.5 2.6 2 2.1 5.6 3.5 9.8 3.5 4.2 0 7.8-1.4 9.8-3.5.8-.8 1.3-1.7 1.5-2.6.3-1.1 0-2.3-.8-3.3-1.2-1.5-3.3-2.5-5.9-3 2.6-.5 4.7-1.5 5.9-3 .8-1 1.1-2.2.8-3.3-.2-.9-.7-1.8-1.5-2.6-2-2.1-5.6-3.5-9.8-3.5zM3.4 7.6c1.6-1.7 4.7-2.8 8.6-2.8 3.9 0 7 1.1 8.6 2.8.6.6 1 1.3 1.1 1.9.1.7-.1 1.4-.6 2-1.2 1.3-3.2 2.3-5.7 2.8 1.1-1.4 1.7-2.9 1.7-4.3 0-1.2-.5-2.1-1.5-2.7-.9-.5-2-.6-3.3-.2-1.4.4-2.8 1.4-4 2.8-1.2-1.4-2.6-2.4-4-2.8-1.3-.4-2.4-.3-3.3.2-1 .6-1.5 1.5-1.5 2.7 0 1.4.6 2.9 1.7 4.3-2.5-.5-4.5-1.5-5.7-2.8-.5-.6-.7-1.3-.6-2 .1-.6.5-1.3 1.1-1.9zm8.6 13.6c-3.9 0-7-1.1-8.6-2.8-.6-.6-1-1.3-1.1-1.9-.1-.7.1-1.4.6-2 1.2-1.3 3.2-2.3 5.7-2.8-1.1 1.4-1.7 2.9-1.7 4.3 0 1.2.5 2.1 1.5 2.7.9.5 2 .6 3.3.2 1.4-.4 2.8-1.4 4-2.8 1.2 1.4 2.6 2.4 4 2.8 1.3.4 2.4.3 3.3-.2 1-.6 1.5-1.5 1.5-2.7 0-1.4-.6-2.9-1.7-4.3 2.5.5 4.5 1.5 5.7 2.8.5.6.7 1.3.6 2-.1.6-.5 1.3-1.1 1.9-1.6 1.7-4.7 2.8-8.6 2.8z" />
    </svg>
  );
}

export function NextjsIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.6 17.6-5.8-7.5v7.5h-1.6V7.4h1.7l5.9 7.6V7.4h1.6v10.2h-1.8z" />
    </svg>
  );
}

export function TypescriptIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm10.7 13.9h-3.4v6.8H6.5v-6.8H3.2v-2.3h9v2.3zm4.5-.4c0 .8.6 1.4 1.8 1.8l1.4.5c2.3.8 3.4 1.9 3.4 3.7 0 2.4-1.8 3.9-4.8 3.9-2.7 0-4.5-1.2-4.9-3.2l2.3-.6c.3 1.1 1.2 1.7 2.6 1.7 1.4 0 2.3-.7 2.3-1.7 0-.7-.5-1.2-1.8-1.7l-1.4-.5c-2.3-.9-3.3-2-3.3-3.7 0-2.2 1.7-3.7 4.5-3.7 2.4 0 4.1 1.1 4.5 3l-2.2.6c-.3-1-1-1.5-2.3-1.5-1.3 0-2.1.6-2.1 1.4z" />
    </svg>
  );
}

export function NodejsIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 2.2 3.3 7.2v10.1l8.7 5 8.7-5V7.2L12 2.2zm0 2.3 6.7 3.9-3 1.7L9 6.2l3-1.7zm-7.2 4.2 6.2 3.6v7.2L4.8 16V8.7zm8.2 10.8V12.3l6.2-3.6V16l-6.2 3.5z" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 6c-4.4 0-7.1 2.2-8 6.6 1.6-2.2 3.5-3 5.8-2.5 1.3.3 2.2 1.3 3.3 2.3 1.7 1.7 3.6 3.6 7.9 3.6 4.4 0 7.1-2.2 8-6.6-1.6 2.2-3.5 3-5.8 2.5-1.3-.3-2.2-1.3-3.3-2.3-1.7-1.7-3.6-3.6-7.9-3.6zm-8 8c-4.4 0-7.1 2.2-8 6.6 1.6-2.2 3.5-3 5.8-2.5 1.3.3 2.2 1.3 3.3 2.3 1.7 1.7 3.6 3.6 7.9 3.6 4.4 0 7.1-2.2 8-6.6-1.6 2.2-3.5 3-5.8 2.5-1.3-.3-2.2-1.3-3.3-2.3-1.7-1.7-3.6-3.6-7.9-3.6z" />
    </svg>
  );
}

export function PostgresqlIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.8 15.6c-.6.3-1.3.4-2.1.4-1.2 0-2.3-.4-3.1-1.1-.8-.7-1.3-1.7-1.4-2.8h2.1c.1.6.3 1.1.7 1.4.4.4.9.5 1.6.5.6 0 1.1-.1 1.5-.4.4-.3.6-.7.6-1.2 0-.4-.1-.7-.4-1-.3-.3-.7-.5-1.3-.6l-1.3-.3c-1-.2-1.8-.6-2.3-1.1-.5-.5-.8-1.2-.8-2 0-.9.4-1.7 1.1-2.3.7-.6 1.7-.9 2.8-.9 1.1 0 2 .3 2.7.8.7.5 1.1 1.3 1.2 2.3h-2.1c-.1-.5-.3-.9-.6-1.2-.3-.3-.8-.4-1.3-.4-.5 0-1 .1-1.3.4-.3.3-.5.6-.5 1 0 .4.1.7.4.9.3.2.7.4 1.2.5l1.4.3c1.1.2 1.9.6 2.4 1.1.5.5.8 1.3.8 2.2.1 1.2-.3 2.1-1.1 2.8z" />
    </svg>
  );
}

export function MysqlIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm4 13.5h-2.1v-4.2c0-.9-.5-1.4-1.4-1.4-.8 0-1.4.5-1.4 1.4v4.2H9v-7h2.1v1c.5-.7 1.3-1.1 2.3-1.1 1.6 0 2.6 1 2.6 2.7v4.4z" />
    </svg>
  );
}

export function DockerIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M13.9 8.2h2.2v2.2h-2.2V8.2zm-2.8 0h2.2v2.2h-2.2V8.2zm-2.7 0h2.2v2.2H8.4V8.2zm5.5-2.7h2.2v2.2h-2.2V5.5zm-2.8 0h2.2v2.2h-2.2V5.5zm-2.7 0h2.2v2.2H8.4V5.5zm-2.8 2.7h2.2v2.2H5.6V8.2zm17 3.3c-.6-.4-1.6-.5-2.4-.2-.2-.6-.6-1.1-1.1-1.5l-.6-.4-.4.6c-.6 1-.7 2.2-.4 3.3-.9.5-2 .8-3.1.8H2.1c-.5 0-.9.4-.9.9 0 2.7 1.1 5.3 3.1 7.2 2 1.9 4.6 3 7.4 3 6.6 0 11.9-5.1 12.3-11.7.1-.6 0-1.2-.4-1.6-.3-.3-.8-.7-1.3-.9z" />
    </svg>
  );
}

export function GitIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="m21.7 10.4-8.1-8.1c-.8-.8-2.1-.8-2.9 0L8.2 4.8l3.6 3.6c.9-.3 1.9 0 2.5.7.7.7.9 1.7.6 2.6l3.5 3.5c.9-.3 1.9 0 2.6.7.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.8-.8-.9-1.9-.5-2.8l-3.3-3.3v4.6c.3.2.5.5.6.8.5 1.1 0 2.4-1.1 2.9-1.1.5-2.4 0-2.9-1.1-.5-1.1 0-2.4 1.1-2.9.4-.2.9-.2 1.3-.1v-4.7c-.4-.2-.8-.4-1.2-.8-.8-.8-.9-1.9-.5-2.8L7.1 3.7 2.3 8.5c-.8.8-.8 2.1 0 2.9l8.1 8.1c.8.8 2.1.8 2.9 0l8.4-8.4c.8-.7.8-2 0-2.7z" />
    </svg>
  );
}

export function FlutterIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M14.3 2.5 4.8 12l2.9 2.9L19.9 2.5h-5.6zm0 10.6-4.8 4.8 4.8 4.8h5.6l-7.6-7.6 7.6-7.6h-5.6l-2.8 2.8 2.8 2.8z" />
    </svg>
  );
}

export function LinuxIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 2C9.5 2 8 3.5 8 6.5v4c-.8.5-2 1.5-2 3.5 0 2 1.5 3 2.5 3.5-.2 1-.3 2 .5 3 .8 1 2 1.5 3 1.5s2.2-.5 3-1.5c.8-1 .7-2 .5-3 1-.5 2.5-1.5 2.5-3.5 0-2-1.2-3-2-3.5v-4C16 3.5 14.5 2 12 2zm-1.5 4c.4 0 .7.3.7.7s-.3.8-.7.8-.8-.4-.8-.8.4-.7.8-.7zm3 0c.4 0 .8.3.8.7s-.4.8-.8.8-.7-.4-.7-.8.3-.7.7-.7zm-1.5 2.5c1.2 0 1.8.8 1.8 1.5 0 .7-.8 1-1.8 1s-1.8-.3-1.8-1c0-.7.6-1.5 1.8-1.5z" />
    </svg>
  );
}
