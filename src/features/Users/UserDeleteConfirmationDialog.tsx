import { WithStyles } from '@material-ui/core/styles';
import * as React from 'react';
import ActionsPanel from 'src/components/ActionsPanel';
import Button from 'src/components/Button';
import ConfirmationDialog from 'src/components/ConfirmationDialog';
import {
  createStyles,
  Theme,
  withStyles
} from 'src/components/core/styles';

type ClassNames = 'root';

const styles = (theme: Theme) =>
  createStyles({
  root: {}
});

interface Props {
  username: string;
  open: boolean;
  onDelete: (username: string) => void;
  onCancel: () => void;
}

type CombinedProps = Props & WithStyles<ClassNames>;

class UserDeleteConfirmationDialog extends React.PureComponent<
  CombinedProps,
  {}
> {
  deleteUser = () => this.props.onDelete(this.props.username);

  render() {
    return (
      <ConfirmationDialog
        title="Confirm Deletion"
        onClose={this.props.onCancel}
        actions={this.renderActionsPanel}
        open={this.props.open}
      >
        {`User ${
          this.props.username
        } will be permanently deleted. Are you sure?`}
      </ConfirmationDialog>
    );
  }

  renderActionsPanel = () => {
    return (
      <ActionsPanel style={{ padding: 0 }}>
        <Button
          buttonType="cancel"
          onClick={this.props.onCancel}
          data-qa-cancel-delete
        >
          Cancel
        </Button>
        <Button
          buttonType="secondary"
          destructive
          onClick={this.deleteUser}
          data-qa-confirm-delete
        >
          Delete
        </Button>
      </ActionsPanel>
    );
  };
}

const styled = withStyles(styles);

export default styled(UserDeleteConfirmationDialog);
