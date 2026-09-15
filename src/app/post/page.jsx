import Link from 'next/link';
import React from 'react';

const PostPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const post = await res.json();
  return (
    <div>
      {
        post.map(post => <div key={post.id} className="min-h-screen bg-slate-100 p-4 flex items-center justify-center">
          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Header */}
            <div className="bg-blue-50 p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                    📝
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-blue-700">
                      JSON POSTS
                    </p>
                    <p className="text-xs text-slate-500">
                      Post details
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  #{post.id}
                </span>
              </div>

              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-blue-600">
                User ID: {post.id}
              </p>

              <h2 className="text-2xl font-bold capitalize leading-snug text-slate-800">
                {post.title}
              </h2>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100">
                  👤
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    User {post.id}
                  </p>
                  <p className="text-xs text-slate-500">
                    Published post
                  </p>
                </div>

                <span className="ml-auto text-slate-400">•••</span>
              </div>

              <p className="whitespace-pre-line text-sm leading-7 text-slate-600">
                {post.body}
              </p>

              <div className="my-5 border-t border-slate-100" />

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  # Post {post.id}
                </span>

              <Link href={`/post/${post.id}`}>
              <button
                  className="rounded-full bg-green-100 px-4 py-2 text-xs font-medium text-green-700 transition hover:bg-green-200"
                >
                  Published
                </button></Link>
              </div>
            </div>

          </div>
        </div>)
      }
    </div>
  );
};

export default PostPage;