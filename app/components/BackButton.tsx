"use client";

export function BackButton() {
  return (
    <button
      className="mb-6 inline-flex rounded-full border-3 border-ink bg-white px-4 py-2 text-sm font-black shadow-[4px_4px_0_#1f2433] transition hover:-translate-y-0.5"
      onClick={() => {
        if (window.history.length > 1) {
          window.history.back();
          return;
        }

        window.location.href = "/";
      }}
      type="button"
    >
      戻る
    </button>
  );
}
