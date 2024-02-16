import Title from "../components/Title/Title";
import Article from "../components/Article/Article";
import { useLocalStorage } from "@/lib/storage";
import { Switch } from "@/components/ui/switch";

// shadcn 이용해서 ui 만들어보기 done
// zustand를 이용하여 전역 상태 관리해보기 done -> os theme 반응
// toggle done

const ThemeMode = () => {
  const { theme, changeTheme } = useLocalStorage();
  const isDarkMode = theme === "dark";

  return (
    <>
      <Title>Light/dark mode with toggle button</Title>
      <div className="flex justify-center my-5 ">
        <Switch checked={isDarkMode} onClick={changeTheme} />
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
