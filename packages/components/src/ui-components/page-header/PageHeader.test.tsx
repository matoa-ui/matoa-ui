import { render } from '@testing-library/react';
import * as React from 'react';
import { ArrowLeftIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { Button, IconButton } from '../button';
import PageHeader from './PageHeader';
import { ButtonGroup } from '../button-group';

describe('Components/PageHeader', () => {
  describe('PageHeader', () => {
    test('renders title correctly', () => {
      const { getByRole } = render(<PageHeader title="Title" />);

      const title = getByRole('heading', {
        name: /title/i,
      });
      expect(title).toBeVisible();
    });

    test('renders action buttons correctly', () => {
      const { getByRole } = render(
        <PageHeader title="Title" actions={<Button>Label</Button>} />
      );

      const button = getByRole('button', {
        name: /label/i,
      });
      expect(button).toBeVisible();
    });

    test('renders back button correctly', () => {
      const { getByRole } = render(
        <PageHeader
          title="Title"
          actions={<Button variant="primary">Label</Button>}
          backButton={
            <IconButton variant="plain" aria-label="Back">
              <ArrowLeftIcon aria-hidden fill="currentColor" />
            </IconButton>
          }
        />
      );

      const backButton = getByRole('button', {
        name: /back/i,
      });
      expect(backButton).toBeVisible();
    });

    test('render children correctly', () => {
      const { getByText } = render(
        <PageHeader
          title="Title"
          actions={
            <ButtonGroup size="md">
              <Button type="button" icon={ChevronDownIcon} iconPosition="right">
                Label
              </Button>
              <Button variant="primary">Label</Button>
            </ButtonGroup>
          }
          backButton={
            <IconButton variant="plain" aria-label="Back">
              <ChevronDownIcon aria-hidden fill="currentColor" />
            </IconButton>
          }
        >
          Children
        </PageHeader>
      );
      expect(getByText('Children')).toBeInTheDocument();
    });
    test('render children correctly', () => {
      const { getByText } = render(
        <PageHeader
          title="Title"
          actions={
            <ButtonGroup size="md">
              <Button type="button" icon={ChevronDownIcon} iconPosition="right">
                Label
              </Button>
              <Button variant="primary">Label</Button>
            </ButtonGroup>
          }
          backButton={
            <IconButton variant="plain" aria-label="Back">
              <ChevronDownIcon aria-hidden fill="currentColor" />
            </IconButton>
          }
        >
          Children
        </PageHeader>
      );
      expect(getByText('Children')).toBeInTheDocument();
    });
  });
});
