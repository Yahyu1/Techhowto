"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

interface StoredComment {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

interface ArticleCommentsProps {
  slug: string;
}

export function ArticleComments({ slug }: ArticleCommentsProps) {
  const storageKey = useMemo(() => `techhowto:comments:${slug}`, [slug]);
  const [comments, setComments] = useState<StoredComment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const value = localStorage.getItem(storageKey);
    if (!value) return;

    try {
      const parsed = JSON.parse(value) as StoredComment[];
      setComments(parsed);
    } catch {
      setComments([]);
    }
  }, [storageKey]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const next: StoredComment[] = [
      {
        id: crypto.randomUUID(),
        name: name.trim(),
        message: message.trim(),
        createdAt: new Date().toISOString(),
      },
      ...comments,
    ];

    setComments(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
    setMessage("");
  };

  return (
    <section className="glass rounded-2xl p-5">
      <h3 className="font-display text-lg font-semibold text-text">Comments</h3>
      <form className="mt-4 space-y-3" onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          className="w-full rounded-xl border border-border bg-elevated px-4 py-2.5 text-sm text-text placeholder:text-muted outline-none transition focus:border-cyan-400/50"
          required
        />
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Write your comment..."
          rows={4}
          className="w-full resize-y rounded-xl border border-border bg-elevated px-4 py-2.5 text-sm text-text placeholder:text-muted outline-none transition focus:border-cyan-400/50"
          required
        />
        <button
          type="submit"
          className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-text transition hover:brightness-110"
        >
          Post Comment
        </button>
      </form>

      <div className="mt-6 space-y-3">
        {comments.length === 0 ? (
          <p className="text-sm text-muted">
            No comments yet. Start the conversation.
          </p>
        ) : (
          comments.map((comment) => (
            <article
              key={comment.id}
              className="rounded-xl border border-border bg-elevated p-4"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="font-semibold text-text">{comment.name}</p>
                <time className="text-xs text-muted">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </time>
              </div>
              <p className="mt-2 text-sm text-muted">{comment.message}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
