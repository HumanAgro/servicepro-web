import { ChipProps } from '@mui/material'
import { LevelEnum, RuntimeUnitEnum, SolutionEnum } from '~/api/servicepro.generated'

export const LevelEnumLabel: Record<LevelEnum, string> = {
  [LevelEnum.Critical]: 'Критический',
  [LevelEnum.Info]: 'Уведомление',
  [LevelEnum.Warning]: 'Обязательный',
}

export const LevelEnumColor: Record<LevelEnum, ChipProps['color']> = {
  [LevelEnum.Critical]: 'primary',
  [LevelEnum.Info]: 'info',
  [LevelEnum.Warning]: 'warning',
}

export const SolutionEnumLabel: Record<SolutionEnum, string> = {
  [SolutionEnum.Complete]: 'Выполнена',
  [SolutionEnum.No]: 'Не выполнена',
}

export const SolutionEnumColor: Record<SolutionEnum, ChipProps['color']> = {
  [SolutionEnum.Complete]: 'success',
  [SolutionEnum.No]: 'warning',
}

export const RuntimeUnitEnumLabel: Record<RuntimeUnitEnum, string> = {
  [RuntimeUnitEnum.No]: '',
  [RuntimeUnitEnum.He]: 'га',
  [RuntimeUnitEnum.Km]: 'км',
  [RuntimeUnitEnum.Mh]: 'мч',
}

export const RuntimeUnitEnumLabelVerbose: Record<RuntimeUnitEnum, string> = {
  [RuntimeUnitEnum.No]: '',
  [RuntimeUnitEnum.He]: 'Гектары',
  [RuntimeUnitEnum.Km]: 'Километры',
  [RuntimeUnitEnum.Mh]: 'Моточасы',
}

