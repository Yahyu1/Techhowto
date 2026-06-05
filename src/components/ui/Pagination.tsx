import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-2">
      {currentPage > 1 && (
        <Link
          href={currentPage === 2 ? basePath : `${basePath}?page=${currentPage - 1}`}
          className="glass glass-hover rounded-lg px-3 py-2 text-sm text-muted hover:text-text"
        >
          Previous
        </Link>
      )}
      {pages.map((page) => (
        <Link
          key={page}
          href={page === 1 ? basePath : `${basePath}?page=${page}`}
          aria-current={page === currentPage ? "page" : undefined}
          className={`rounded-lg px-3 py-2 text-sm ${
            page === currentPage
              ? "bg-cyan-500/20 font-semibold text-cyan-300"
              : "glass glass-hover text-muted hover:text-text"
          }`}
        >
          {page}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="glass glass-hover rounded-lg px-3 py-2 text-sm text-muted hover:text-text"
        >
          Next
        </Link>
      )}
    </nav>
  );
}
