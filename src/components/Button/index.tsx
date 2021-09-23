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
export default function Button({ children, ...props }: ButtonProps) {
	return (
		<button className="bg-gray-900 text-white" {...props}>
			{children}
		</button>
	);
}
