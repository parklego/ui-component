import Title from "../components/Title/Title";
import Article from "../components/Article/Article";

import { Switch } from "@/components/ui/switch";
import { persistLocalStorage } from "@/lib/storage";

// tip : shadcn에서는 유저가 테마를 선택하게 하던지, 아니면 시스템의 테마를 따르게 하던지 선택하게 UX가 고려되어 있다.
//       phind 사이트의 경우 처음에 접근 하였을 때, os의 테마를 따른다. 그러나 유저가 테마를 선택한 경우 유저의 테마만 따른다.

const ThemeMode = () => {
  const { theme, setTheme, setIsUserSelectedTheme } = persistLocalStorage();
  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
    setIsUserSelectedTheme();
  };

  return (
    <>
      <Title>Light/dark mode with toggle button</Title>
      <div className="flex justify-center my-5 ">
        <Switch
          checked={isDarkMode}
          onClick={toggleTheme}
          className="data-[state=checked]:bg-gray-500 "
        />
      </div>

      <Article>
        Et do nostrud pariatur elit qui eiusmod magna deserunt consequat amet
        eu. Nulla ut elit pariatur ad sit non nisi ea quis. Officia quis tempor
        enim. Pariatur consequat amet do id tempor id sit.
      </Article>
    </>
  );
};

export default ThemeMode;
