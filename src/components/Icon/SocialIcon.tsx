import Icon from "@/components/Icon";

interface SocialIconProps {
  social: SocialType;
  color: LayoutColorType;
}

const iconSrc = {
  white: {
    linkedin: "/icons/sns/linkedin-on.png",
    facebook: "/icons/sns/facebook-on.png",
    naver: "/icons/sns/naver-on.png",
    kakao: "/icons/sns/kakao-on.png",
  },
  black: {
    linkedin: "/icons/sns/linkedin-off.png",
    facebook: "/icons/sns/facebook-off.png",
    naver: "/icons/sns/naver-off.png",
    kakao: "/icons/sns/kakao-off.png",
  },
};

export default function SocialIcon({ social, color }: SocialIconProps) {
  return <Icon src={iconSrc[color][social]} width={40} height={40} className="rounded-full" />;
}
