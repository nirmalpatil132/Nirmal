/**
 * Resolves static asset paths cleanly across local development (/)
 * and GitHub Pages static hosting (/Nirmal).
 */
export function getAssetPath(relativePath: string): string {
  if (!relativePath) return '';
  if (
    relativePath.startsWith('http://') ||
    relativePath.startsWith('https://') ||
    relativePath.startsWith('data:')
  ) {
    return relativePath;
  }

  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ??
    (process.env.GITHUB_ACTIONS === 'true' ? '/Nirmal' : '');

  const cleanPath = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;

  if (!basePath) {
    return cleanPath;
  }

  if (cleanPath === basePath || cleanPath.startsWith(`${basePath}/`)) {
    return cleanPath;
  }

  return `${basePath}${cleanPath}`;
}

/**
 * Resolves full absolute URL for metadata (OpenGraph, Twitter, Schema.org)
 * without duplicate base paths.
 */
export function getAbsoluteAssetUrl(
  relativePath: string,
  siteUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://nirmalpatil132.github.io/Nirmal'
): string {
  if (relativePath.startsWith('http://') || relativePath.startsWith('https://')) {
    return relativePath;
  }

  const assetPath = getAssetPath(relativePath);
  try {
    const parsed = new URL(siteUrl);
    const origin = parsed.origin;
    const cleanPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
    return `${origin}${cleanPath}`;
  } catch {
    return assetPath;
  }
}
