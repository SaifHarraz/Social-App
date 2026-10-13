import { Avatar } from "@heroui/react";


export default function TopCommentPreview({ topComment }) {
  if (!topComment) return null;

  const {
    commentCreator: { name, photo },
    content,
  } = topComment;

  return (
    <div className="mx-4 mb-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
      <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-500">
        Top Comment
      </p>

      <div className="flex items-start gap-2">
        <Avatar className="h-8 w-8 rounded-full object-cover">
          <Avatar.Image src={photo} alt={name} />
          <Avatar.Fallback>{name.substring(0, 2)}</Avatar.Fallback>
        </Avatar>

        <div className="min-w-0 flex-1 rounded-2xl bg-white px-3 py-2">
          <p className="truncate text-xs font-bold text-slate-900">{name}</p>
          <p className="mt-0.5 whitespace-pre-wrap text-sm text-slate-700">
            {content}
          </p>
        </div>
      </div>

      <button className="mt-2 text-xs font-bold text-[#1877f2] hover:underline">
        View all comments
      </button>
    </div>
  );
}