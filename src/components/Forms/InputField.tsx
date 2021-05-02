import { CheckIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputProps,
} from '@chakra-ui/react';
import { useField } from 'formik';

interface IInputFieldProps extends InputProps {
  name: string;
  label?: string;
  leftAddonElement?: JSX.Element;
}

export const InputField = (props: IInputFieldProps): JSX.Element => {
  const { name, label, leftAddonElement, ...restOfProps } = props;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore -> Integrating Formik props with Chakra Input Props
  const [field, meta] = useField(props);

  const invalidTouchedInput = !!meta.error && !!meta.touched;
  const validTouchedInput = !meta.error && meta.touched;

  return (
    <FormControl isInvalid={invalidTouchedInput}>
      {label && (
        <FormLabel mb="1" htmlFor={name}>
          {label}
        </FormLabel>
      )}
      <InputGroup>
        {leftAddonElement && <InputLeftElement children={leftAddonElement} />}
        <Input
          {...(validTouchedInput
            ? {
                borderColor: 'green.500',
                boxShadow: 'inner',
              }
            : {})}
          id={name}
          variant="filled"
          {...restOfProps}
          {...field}
        />
        {validTouchedInput && (
          <InputRightElement children={<CheckIcon color="green.500" w="9px" />} />
        )}
      </InputGroup>
      {invalidTouchedInput && <FormHelperText>{meta.error}</FormHelperText>}
    </FormControl>
  );
};
