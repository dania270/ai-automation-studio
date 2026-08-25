import { createFileRoute, redirect } from "@tanstack/react-router";

// The portfolio is a standalone HTML/CSS/JS site living in public/portfolio.
// The app root redirects to it so the preview shows the site immediately.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/portfolio/index.html" });
  },
  component: () => null,
});
