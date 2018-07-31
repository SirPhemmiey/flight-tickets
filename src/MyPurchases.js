import React from 'react';
import Ticket from './Ticket';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

/**
 * Displays a list of user's purchased flights.
 * @param web3 - instance of web3
 * @param contract - instance of the smart contract
 * @param account - address of the user
 * @param myTickets - list of tickets purchased by the user
 */
class MyPurchases extends React.Component {

  formatETH = price => {
    return this.props.web3.fromWei(price, 'ether') + ' ETH';
  }

  render() {
    return (
      <div>
        <h1>My Purchases</h1>
        {this.props.myTickets.map((ticket, i) => (
          <Paper key={`mp-${i}`} className="my-purchase-paper">
            <Grid container spacing={16}>
              <Grid item xs={1}>
                <div className="purchase-id">{ticket.purchaseId}</div>
              </Grid>
              <Grid item xs={8}>
                <Ticket
                  ticket={ticket}
                  formatETH={this.formatETH}
                />
              </Grid>
              {ticket.passenger ? (
                <Grid item xs={3}>
                  <div className="ticket-passenger-details">
                    <div>Passenger Details</div>
                    <div>First name: <span className="passenger-details-value">{ticket.passenger.firstName}</span></div>
                    <div>Last name: <span className="passenger-details-value">{ticket.passenger.lastName}</span></div>
                  </div>
                </Grid>
              ) : null}
            </Grid>
          </Paper>
        ))}
      </div>
    );
  }

}

export default MyPurchases;
