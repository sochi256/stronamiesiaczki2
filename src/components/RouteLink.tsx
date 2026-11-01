import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { navigate } from '@/hooks/useRouter';

interface RouteLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string;
}

export function RouteLink({ to, onClick, ...props }: RouteLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return <a href={to} onClick={handleClick} {...props} />;
}
