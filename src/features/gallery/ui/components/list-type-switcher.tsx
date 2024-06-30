import AppsRoundedIcon from '@mui/icons-material/AppsRounded'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import {
  Stack,
  SxProps,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { MouseEvent, Dispatch, SetStateAction } from 'react'

import { TListType } from '../../model'

interface IProps {
  sx?: SxProps
  listType: TListType
  setListType: Dispatch<SetStateAction<TListType>>
}

export function ListTypeSwitcher({ listType, setListType, sx }: IProps) {
  const handleChange = (
    _: MouseEvent<HTMLElement>,
    newType: 'grid' | 'list'
  ) => {
    setListType(newType)
  }

  const control = {
    value: listType,
    onChange: handleChange,
    exclusive: true,
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center" sx={sx}>
      <Typography variant="body2">view as:</Typography>

      <ToggleButtonGroup
        size="small"
        aria-label="switch-list-type"
        {...control}
      >
        <ToggleButton value="grid" key="grid" sx={{ height: 'initial' }}>
          <AppsRoundedIcon />
        </ToggleButton>

        <ToggleButton value="list" key="list">
          <FormatListBulletedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  )
}
