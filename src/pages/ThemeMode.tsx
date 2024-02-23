import Title from "../components/Title/Title";
import Article from "../components/Article/Article";

import { Switch } from "@/components/ui/switch";
import { persistLocalStorage } from "@/lib/storage";

// shadcn 이용해서 ui 만들어보기 done
// zustand를 이용하여 전역 상태 관리해보기 done -> os theme 반응 -> hook으로 실시간 반영 done
// toggle done

// tip : shadcn에서는 유저가 테마를 선택하게 하던지, 아니면 시스템의 테마를 따르게 하던지 선택하게 UX가 고려되어 있다.

const ThemeMode = () => {
  const { theme, setTheme } = persistLocalStorage();
  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <>
      <Title>Light/dark mode with toggle button</Title>
      <div className="flex justify-center my-5 ">
        <Switch checked={isDarkMode} onClick={toggleTheme} />
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
