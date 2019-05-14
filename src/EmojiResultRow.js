import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import "./EmojiResultRow.css";

class EmojiResultsRow extends PureComponent {
  render() {
    return (
      <div className="emoji-list"
        data-clipboard-text={this.props.symbol}>
      
        <Grid container spacing={16} justify="center">
          {this.props.data.map( x => (
            <Grid item xs={6} sm={4} md={2}>
              <Paper className="emoji-paper copy-to-clipboard" data-clipboard-text={x.symbol}>
                <img alt={x.title} src={`//cdn.jsdelivr.net/emojione/assets/png/${x.symbol.codePointAt(0).toString(16)}.png`} />
                <span className="title">{x.title}</span>
              </Paper>
            </Grid>
          ))}
        </Grid>

      </div>
    );
  }
}
EmojiResultsRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string
};
export default EmojiResultsRow;
