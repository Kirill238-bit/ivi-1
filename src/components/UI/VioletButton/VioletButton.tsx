import { IVarButton } from '@/types/button.interface'
import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	FC,
	useLayoutEffect,
	useRef,
} from 'react'
import style from './VioletButton.module.scss'

interface IProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	variant?: IVarButton
}

const VioletButton: FC<IProps> = (
	{ children, variant = 'primary', ...props },
	addElementLen
) => {
	const currentClassName = `${style.button} ${
		variant === 'secondary' ? style.secondary : ''
	}`

	const wrapperRef = useRef<HTMLButtonElement>(null)
	const isSelectedRef = useRef(false)

	useLayoutEffect(() => {
		if (!wrapperRef.current || isSelectedRef.current) return

		addElementLen(wrapperRef.current.offsetWidth)
		isSelectedRef.current = true
	}, [wrapperRef])

	return (
		<button className={currentClassName} ref={wrapperRef} {...props}>
			{children}
		</button>
	)
}

export default VioletButton
