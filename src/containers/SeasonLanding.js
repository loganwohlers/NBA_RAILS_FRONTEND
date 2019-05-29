import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAllSeasonDataIfNeeded } from '../actions'
import Loader from 'react-loader-spinner'

class SeasonLanding extends React.Component {

    componentDidMount() {
        this.props.fetchAllSeasonDataIfNeeded()
    }

    render() {
        const yr = this.props.season.year
        const playerSeasons = this.props.season.playerSeasons
        const seasonGames = this.props.season.seasonGames
        let ready = (!(playerSeasons.data === 0 || seasonGames.data === 0) && !(playerSeasons.isFetching || seasonGames.isFetching))
        return (
            <div>
                {ready ?
                    <div>
                        <button className="ui primary basic button" ><Link to={`/seasonavgs/${yr}`}>{yr} Season Stats</Link></button>
                        <button className="ui primary basic button"><Link to={`/games/${yr}`}>Schedule / Boxscores</Link></button>
                    </div> :
                    <div className="ui container center aligned">
                        <div className="ui item centered">
                            <h3>Loading All Season Data...</h3>
                            <Loader type="Ball-Triangle" color="green" height={400} width={400} />

                        </div>
                    </div>
                }
            </div >
        )
    }

}

const mapStateToProps = (state) => {
    return {
        season: state.currSeason,
    }
}


export default connect(mapStateToProps, { fetchAllSeasonDataIfNeeded })(SeasonLanding)
