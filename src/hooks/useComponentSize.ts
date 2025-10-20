import { useEffect, useRef, useState } from "react";

interface ComponentSize {
  width: number;
  height: number;
}

interface ComponentSizeHook {
  componentRef: React.RefObject<HTMLDivElement>;
  size: ComponentSize;
}

function useComponentSize(): ComponentSizeHook {
  const [size, setSize] = useState<ComponentSize>({ width: 0, height: 0 });
  const componentRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const { width, height } = componentRef.current?.getBoundingClientRect() ?? {
  //       width: 0,
  //       height: 0,
  //     };

  //     setSize({ width, height });
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // return { componentRef, size };

  useEffect(() => {
    const element = componentRef.current;
    if (!element) return;

    const observer = new ResizeObserver(entries => {
      entries.forEach(entry => {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      });
    });

    // 3. 관찰 시작
    observer.observe(element);

    // 4. 클린업: 컴포넌트 언마운트 시 관찰 중지
    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
    // 👈 의존성 배열이 비어 있어 마운트 시에만 observer를 설정하고 해제합니다.
  }, []);

  return { componentRef, size };
}

export default useComponentSize;
