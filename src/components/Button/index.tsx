import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Button Text
	 */
	children: ReactNode;
}

/**
 * Pretty LUA Button Component.
 * @param children - Button Content
 * @returns Button JSX Component
 */
export function Button({ children, ...props }: ButtonProps) {
	return <button {...props}>{children}</button>;
}
