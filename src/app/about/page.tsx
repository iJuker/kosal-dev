import Image from "next/image";
import { getAbout } from "@/lib/about";
import { AvatarIcon } from "@/assets/icons";

export default function AboutPage() {
  const about = getAbout();

  return (
    <div className="min-h-screen text-zinc-900 dark:text-white">
      <div className="max-w-lg mx-auto px-6 py-16 flex flex-col items-center">
        <h1 className="text-6xl font-bold mb-14">{about.title}</h1>

        {/* Avatar */}
        <div className="w-56 h-56 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 mb-12 shrink-0">
          {about.avatar ? (
            <Image src={about.avatar} alt={about.name} width={224} height={224} className="object-cover w-full h-full" />
          ) : (
            <div className="w-full h-full flex items-end justify-center">
              <AvatarIcon className="w-52 h-52 text-zinc-400 dark:text-zinc-600" />
            </div>
          )}
        </div>

        <h2 className="text-3xl font-bold mb-3">Hi, I&apos;m {about.name}</h2>

        {/* Experience */}
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8">{about.experience}</p>

        {/* Skills */}
        {about.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {about.skills.map((skill) => (
              <span
                key={skill}
                className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-sm px-4 py-1.5 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Bio */}
        <div className="space-y-6 text-zinc-600 dark:text-zinc-300 text-base leading-relaxed text-center">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
