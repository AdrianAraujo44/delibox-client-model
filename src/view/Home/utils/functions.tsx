import { IoCalendar, IoCalendarOutline } from "react-icons/io5";
import { useTheme } from "styled-components";
import { Status } from '../styles'

export const getStatusDelivery = (status: string) => {
	const { colors } = useTheme()
	switch (status) {
		case "ABERTO":
			return (
				<Status color={colors.palette.esmerald[600]}>
					<IoCalendarOutline size={20} color={colors.palette.esmerald[600]} />
					aberto
				</Status>
			)
		case "FECHADO":
			return (
				<Status color={colors.palette.rose[600]}>
					<IoCalendarOutline size={20} color={colors.palette.rose[600]} />
					fechado
				</Status>
			)
		case "PAUSADO":
			return (
				<Status color={colors.palette.zinc[600]}>
					<IoCalendarOutline size={20} color={colors.palette.zinc[600]} />
					pausado
				</Status>
			)
	}
}

