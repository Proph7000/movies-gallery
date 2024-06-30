import { Autocomplete, SxProps, TextField } from '@mui/material'
import { useEffect, useState } from 'react'

interface IProps {
  options: string[]
  currentOptions: string[]
  label: string
  sx?: SxProps
  onChange?: (value: string[]) => void
}

export function MultipleSelectCheckmarks({
  currentOptions,
  options,
  label,
  sx,
  onChange,
}: IProps) {
  const [autocompleteValues, setAutocompleteValues] = useState<
    string[] | undefined
  >(options.filter((item) => currentOptions?.includes(item)) || undefined)

  useEffect(() => {
    setAutocompleteValues(
      options.filter((item) => currentOptions?.includes(item)) || undefined
    )
  }, [currentOptions])

  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      id={label}
      options={options}
      getOptionLabel={(option) => option}
      value={autocompleteValues}
      onChange={(_, option) => {
        if (onChange) {
          onChange(option.map((item) => item))
        }
      }}
      sx={sx}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label}
          placeholder={label}
        />
      )}
    />
  )
}
