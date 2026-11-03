import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    // Generate static HTML for our routes at build time.
    renderMode: RenderMode.Prerender,
  },
];
