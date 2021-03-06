import * as React from 'react';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/outline';
import { Box } from '../../../layout';
import { useComponentStyles } from '../../../system';
import { Heading, Paragraph } from '../../../typography';
import { IconButton } from '../../button';

export type MessageStates =
  | 'default'
  | 'info'
  | 'warning'
  | 'critical'
  | 'success';

export interface MessageProps {
  /** Message box content. Could be a string or a `ReactNode`. */
  message: string | React.ReactNode;
  /** Message title. */
  title?: string;
  /** Additional CSS classes to give to the banner. */
  className?: string;
  /** Additional CSS properties to give to the banner. */
  style?: React.CSSProperties;
  /** The message variant. Defaults to `default`. */
  variant?: MessageStates;
  /** Triggers when the Close button is clicked. */
  onClose?: () => void;
}

/** Banners are used to convey important information to users. */
const Message: React.FC<MessageProps> = ({
  className,
  style,
  title,
  message,
  variant = 'default',
  onClose,
  ...rest
}) => {
  const messageBaseStyles = useComponentStyles('messageBase', { variant });
  const messageIconStyles = useComponentStyles('messageIcon', { variant });

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (onClose) {
      onClose();
    }
  };

  const renderIconStates = () => {
    switch (variant) {
      case 'default': {
        return <CheckCircleIcon width={24} aria-hidden fill="currentColor" />;
      }
      case 'success': {
        return <CheckCircleIcon width={24} aria-hidden fill="currentColor" />;
      }
      case 'info': {
        return (
          <InformationCircleIcon width={24} aria-hidden fill="currentColor" />
        );
      }
      case 'warning': {
        return <ExclamationIcon width={24} aria-hidden fill="currentColor" />;
      }
      case 'critical': {
        return (
          <ExclamationCircleIcon width={24} aria-hidden fill="currentColor" />
        );
      }
      default: {
        return null;
      }
    }
  };

  const renderMessage = () => {
    if (typeof message !== 'string') {
      return message;
    }

    return (
      <Paragraph display="inline-block" scale={200} m={0}>
        {message}
      </Paragraph>
    );
  };

  return (
    <Box className={className} style={style} sx={messageBaseStyles} {...rest}>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        py="md"
        pl="md"
        sx={messageIconStyles}
      >
        {renderIconStates()}
      </Box>
      <Box flex="1 1 auto" p="md">
        {title ? (
          <Heading as="h4" mb="xs" scale={300} fontWeight={600}>
            {title}
          </Heading>
        ) : null}
        {renderMessage()}
      </Box>
      {onClose && (
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          p="md"
          color="greymed04"
        >
          <IconButton
            aria-label="Close"
            data-testid="Banner-closeButton"
            variant="secondary"
            onClick={handleClose}
          >
            <XIcon width={24} aria-hidden fill="currentColor" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

Message.displayName = 'Message';

export default Message;
