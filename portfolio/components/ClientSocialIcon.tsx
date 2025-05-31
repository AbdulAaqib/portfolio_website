import dynamic from 'next/dynamic';

// Remove the direct type import and define the type locally
type SocialIconProps = {
  url: string;
  fgColor?: string;
  bgColor?: string;
  className?: string;
};

const SocialIcon = dynamic(
  () => import('react-social-icons').then((mod) => mod.SocialIcon),
  { ssr: false }
);

export default function ClientSocialIcon(props: SocialIconProps) {
  return <SocialIcon {...props} target="_blank" rel="noopener noreferrer" />;
} 