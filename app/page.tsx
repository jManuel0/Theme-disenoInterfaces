import { ReactNode } from "react";

type ThemeOption = {
  id: string;
  label: string;
  previewClass: string;
  darkLines?: boolean;
};

export default function Home() {
  const themes: ThemeOption[] = [
    {
      id: "auto",
      label: "Auto",
      previewClass:
        "border border-violet-100 bg-gradient-to-r from-violet-200/80 via-violet-50 to-white",
    },
    {
      id: "light",
      label: "Light",
      previewClass:
        "border-2 border-violet-500 bg-gradient-to-r from-white via-zinc-50 to-zinc-100",
    },
    {
      id: "dark",
      label: "Dark",
      previewClass:
        "border border-indigo-700 bg-gradient-to-r from-indigo-900 via-violet-700 to-indigo-600",
      darkLines: true,
    },
  ];

  const colors = ["#F48D73", "#F2D56B", "#88D889", "#4F46E5", "#D784D8"];

  return (
    <main className="min-h-screen bg-[#f2f2f5] px-4 py-8 text-zinc-800 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-4xl rounded-[30px] border border-zinc-200 bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.06)] sm:p-8">
        <header className="border-b border-zinc-200 pb-6">
          <h1 className="text-4xl font-bold tracking-tight">Appearance</h1>
          <p className="mt-2 text-[31px] leading-tight text-zinc-400 sm:text-3xl">
            Set or customize your preferences for the system
          </p>
        </header>

        <div className="divide-y divide-zinc-200">
          <div className="grid gap-4 py-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold sm:text-[38px] sm:leading-none">
                Language
              </h2>
              <p className="mt-1 text-xl text-zinc-500 sm:text-[31px] sm:leading-tight">
                Select the language of the platform
              </p>
            </div>

            <label className="relative inline-flex w-full max-w-56 items-center sm:w-56">
              <select
                defaultValue="english"
                className="h-14 w-full appearance-none rounded-2xl border border-zinc-300 bg-white px-5 pr-12 text-3xl font-medium text-zinc-700 outline-none transition focus:ring-2 focus:ring-violet-400 sm:h-16 sm:text-[42px]"
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
              </select>
              <span className="pointer-events-none absolute right-4 text-2xl text-zinc-400 sm:text-3xl">
                v
              </span>
            </label>
          </div>

          <fieldset className="py-6">
            <legend className="text-2xl font-semibold sm:text-[38px] sm:leading-none">
              Interface theme
            </legend>
            <p className="mt-1 text-xl text-zinc-500 sm:text-[31px] sm:leading-tight">
              Customize your application appearance
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {themes.map((theme) => (
                <ThemeCard key={theme.id} theme={theme} />
              ))}
            </div>
          </fieldset>

          <div className="grid gap-4 py-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold sm:text-[38px] sm:leading-none">
                Accent color
              </h2>
              <p className="mt-1 text-xl text-zinc-500 sm:text-[31px] sm:leading-tight">
                Pick your platform&apos;s main color
              </p>
            </div>

            <div className="flex items-center gap-3">
              {colors.map((color) => (
                <label key={color} className="relative">
                  <input
                    type="radio"
                    name="accentColor"
                    defaultChecked={color === "#4F46E5"}
                    className="peer sr-only"
                  />
                  <span
                    className="block h-10 w-10 rounded-full border-2 border-transparent shadow-sm transition peer-checked:scale-110 peer-checked:border-zinc-500"
                    style={{ backgroundColor: color }}
                  />
                </label>
              ))}
            </div>
          </div>

          <div>
            <SettingRow
              title="Reduce motion"
              icon={<MotionIcon />}
              defaultChecked
            />
            <SettingRow title="Auto play" icon={<PlayIcon />} defaultChecked />
            <SettingRow title="High quality photo" icon={<PhotoIcon />} />
          </div>
        </div>

        <footer className="mt-5 flex flex-col gap-4 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            className="text-xl font-semibold text-zinc-500 transition hover:text-zinc-700 sm:text-[36px]"
          >
            Reset to default
          </button>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="h-12 rounded-2xl border border-zinc-300 px-8 text-lg font-semibold text-zinc-700 transition hover:bg-zinc-100 sm:h-14 sm:text-4xl"
            >
              Cancel
            </button>
            <button
              type="button"
              className="h-12 rounded-2xl bg-indigo-600 px-8 text-lg font-semibold text-white shadow-sm transition hover:bg-indigo-700 sm:h-14 sm:text-4xl"
            >
              Save Preferences
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
}

function ThemeCard({ theme }: Readonly<{ theme: ThemeOption }>) {
  return (
    <label className="group cursor-pointer rounded-2xl border border-transparent p-2 transition hover:border-violet-200">
      <input
        type="radio"
        name="theme"
        value={theme.id}
        defaultChecked={theme.id === "light"}
        className="peer sr-only"
      />

      <div
        className={`relative h-28 overflow-hidden rounded-2xl ${theme.previewClass} shadow-sm transition peer-focus-visible:ring-2 peer-focus-visible:ring-violet-500`}
      >
        <PreviewLines dark={Boolean(theme.darkLines)} />
        <div className="absolute bottom-2 left-2 hidden h-5 w-5 items-center justify-center rounded-full border border-violet-200 bg-violet-600 peer-checked:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        </div>
      </div>

      <p className="mt-3 text-center text-2xl font-semibold text-zinc-600 peer-checked:text-violet-600 sm:text-[40px]">
        {theme.label}
      </p>
    </label>
  );
}

function PreviewLines({ dark }: Readonly<{ dark: boolean }>) {
  const line = dark ? "bg-white/45" : "bg-zinc-300/80";
  const lineSoft = dark ? "bg-white/35" : "bg-zinc-300/65";

  return (
    <>
      <div className={`absolute left-3 top-3 h-1.5 w-8 rounded-full ${line}`} />
      <div className={`absolute left-3 top-7 h-1.5 w-20 rounded-full ${line}`} />
      <div
        className={`absolute left-3 top-11 h-1.5 w-16 rounded-full ${lineSoft}`}
      />
      <div
        className={`absolute left-3 top-16 h-1.5 w-24 rounded-full ${lineSoft}`}
      />
      <div
        className={`absolute left-3 top-20 h-1.5 w-14 rounded-full ${lineSoft}`}
      />
    </>
  );
}

type SettingRowProps = {
  title: string;
  icon: ReactNode;
  defaultChecked?: boolean;
};

function SettingRow({ title, icon, defaultChecked = false }: Readonly<SettingRowProps>) {
  return (
    <label className="grid gap-3 border-b border-zinc-200 py-5 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-center">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-6 w-6 items-center justify-center text-zinc-400 sm:h-7 sm:w-7">
          {icon}
        </span>
        <p className="text-2xl font-semibold sm:text-[42px] sm:leading-none">
          {title}
        </p>
      </div>

      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="h-8 w-14 cursor-pointer appearance-none rounded-full bg-zinc-200 p-1 transition before:block before:h-6 before:w-6 before:rounded-full before:bg-white before:shadow-sm before:transition before:content-[''] checked:bg-indigo-600 checked:before:translate-x-6"
      />
    </label>
  );
}

function MotionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path
        d="M12 3.5v2M12 18.5v2M20.5 12h-2M5.5 12h-2M18 6l-1.4 1.4M7.4 16.6 6 18M18 18l-1.4-1.4M7.4 7.4 6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
      <path
        d="M8.2 6.3c0-1.1 1.2-1.8 2.1-1.2l8 4.9c.9.6.9 1.9 0 2.5l-8 4.9c-.9.6-2.1-.1-2.1-1.2V6.3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhotoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
      <rect
        x="3.5"
        y="4.5"
        width="17"
        height="15"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="9" cy="10" r="1.4" fill="currentColor" />
      <path
        d="m6.8 17 3.2-3.2a1.2 1.2 0 0 1 1.7 0l1.2 1.2a1.2 1.2 0 0 0 1.7 0l1.6-1.6a1.2 1.2 0 0 1 1.7 0L20.5 16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
