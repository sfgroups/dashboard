import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from "@mui/material/TextField";
import { Autocomplete } from '@mui/material';

type Option = {
  id: string;
  name: string;
};

type FormValues = {
  option: Option | null;
};

export default function AutocompleteExample()  {
  const [options1, setOptions1] = useState<Option[]>([]);

  const { control, handleSubmit } = useForm<FormValues>();

  const handleOptionSearch = async (query: string) => {
    const response = await fetch(`https://my-api.com/options?query=${query}`);
    const data = await response.json();
    setOptions1(data);
  };

  const onSubmit = (data: FormValues) => {
    console.log(data.option);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="option"
        control={control}
        defaultValue={null}
        render={({ field }) => (
          <Autocomplete
            {...field}            
            options={options1}
            getOptionLabel={(option : any) => option.name}
            onChange={(event : any, value : any) => {
              field.onChange(value);
            }}
            onInputChange={(event :any, value :any) => {
              handleOptionSearch(value);
            }}
            renderInput={(params : any) => (
              <TextField {...params} label="Option" variant="outlined" />
            )}
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
