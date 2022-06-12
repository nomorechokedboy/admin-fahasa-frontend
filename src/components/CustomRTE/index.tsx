// @ts-nocheck
import RichTextEditor, { EditorValue, ToolbarConfig } from 'react-rte';
import clx from 'classnames';
import styles from './styles.module.scss';
import { toolbarConfig } from './configs';
import Text from '../Text';
import { DEV } from '@/configs/env';
import { useMantineColorScheme } from '@mantine/core';

interface CustomRTEProps {
  className?: string;
  readOnly?: true;
  placeholder?: string;
  value: EditorValue;
  onChange?: (inputValue: EditorValue) => void;
  error?: string;
  label?: string;
}

export default function CustomRTE({
  className,
  error,
  label,
  ...props
}: CustomRTEProps) {
  const { colorScheme } = useMantineColorScheme();
  const RTE = DEV ? RichTextEditor : RichTextEditor.default;

  return (
    <div className={styles.container}>
      {label && (
        <div className={styles.label}>
          <Text size="sm" font="medium">
            {label}
          </Text>
        </div>
      )}
      <RTE
        className={clx(className, {
          [styles.dark]: colorScheme === 'dark',
          [styles.rteError]: error,
        })}
        toolbarConfig={toolbarConfig as ToolbarConfig}
        {...props}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
