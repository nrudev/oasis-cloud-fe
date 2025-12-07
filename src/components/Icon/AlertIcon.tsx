import Icon from "@/components/Icon";

export default function AlertIcon({ size }: { size?: number }) {
  return <Icon src="/icons/control/alarm.png" width={size ?? 100} height={size ?? 100} />;
}
