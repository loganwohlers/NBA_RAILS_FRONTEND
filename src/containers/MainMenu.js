import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setSeason } from '../actions'


import PracticeVictory from '../components/SelectedDisplay/PracticeVictory'

const lamarcus = [{ "id": 339369, "player_season_id": 9892, "mp": "35:56", "fg": "15", "fga": "21", "fg_pct": ".714", "fg3": "0", "fg3a": "1", "fg3_pct": ".000", "ft": "4", "fta": "5", "ft_pct": ".800", "orb": "5", "drb": "11", "trb": "16", "ast": "1", "stl": "1", "blk": "1", "tov": "2", "pf": "1", "pts": "34", "plus_minus": "+19", "created_at": "2019-05-28T19:42:16.028Z", "updated_at": "2019-05-28T19:42:16.028Z", "dnp": false, "game_id": 15994, "date": "20190410", "home_team": "SAS", "away_team": "DAL" }, { "id": 339881, "player_season_id": 9892, "mp": "38:10", "fg": "11", "fga": "16", "fg_pct": ".688", "fg3": "1", "fg3a": "1", "fg3_pct": "1.000", "ft": "9", "fta": "11", "ft_pct": ".818", "orb": "2", "drb": "7", "trb": "9", "ast": "0", "stl": "1", "blk": "2", "tov": "4", "pf": "2", "pts": "32", "plus_minus": "+9", "created_at": "2019-05-28T19:42:25.930Z", "updated_at": "2019-05-28T19:42:25.930Z", "dnp": false, "game_id": 15729, "date": "20190306", "home_team": "ATL", "away_team": "SAS" }, { "id": 340067, "player_season_id": 9892, "mp": "36:01", "fg": "9", "fga": "17", "fg_pct": ".529", "fg3": "1", "fg3a": "2", "fg3_pct": ".500", "ft": "3", "fta": "4", "ft_pct": ".750", "orb": "1", "drb": "8", "trb": "9", "ast": "2", "stl": "0", "blk": "0", "tov": "4", "pf": "3", "pts": "22", "plus_minus": "-3", "created_at": "2019-05-28T19:42:29.259Z", "updated_at": "2019-05-28T19:42:29.259Z", "dnp": false, "game_id": 15721, "date": "20190304", "home_team": "SAS", "away_team": "DEN" }, { "id": 340440, "player_season_id": 9892, "mp": "34:49", "fg": "10", "fga": "18", "fg_pct": ".556", "fg3": "0", "fg3a": "0", "fg3_pct": "", "ft": "7", "fta": "7", "ft_pct": "1.000", "orb": "2", "drb": "8", "trb": "10", "ast": "1", "stl": "1", "blk": "1", "tov": "0", "pf": "1", "pts": "27", "plus_minus": "+13", "created_at": "2019-05-28T19:42:36.320Z", "updated_at": "2019-05-28T19:42:36.320Z", "dnp": false, "game_id": 15706, "date": "20190302", "home_team": "SAS", "away_team": "OKC" }, { "id": 340991, "player_season_id": 9892, "mp": "38:42", "fg": "11", "fga": "22", "fg_pct": ".500", "fg3": "0", "fg3a": "0", "fg3_pct": "", "ft": "2", "fta": "2", "ft_pct": "1.000", "orb": "1", "drb": "4", "trb": "5", "ast": "3", "stl": "0", "blk": "2", "tov": "0", "pf": "1", "pts": "24", "plus_minus": "+15", "created_at": "2019-05-28T19:42:45.673Z", "updated_at": "2019-05-28T19:42:45.673Z", "dnp": false, "game_id": 15684, "date": "20190227", "home_team": "SAS", "away_team": "DET" }, { "id": 341584, "player_season_id": 9892, "mp": "36:34", "fg": "12", "fga": "21", "fg_pct": ".571", "fg3": "0", "fg3a": "1", "fg3_pct": ".000", "ft": "2", "fta": "3", "ft_pct": ".667", "orb": "4", "drb": "6", "trb": "10", "ast": "1", "stl": "0", "blk": "3", "tov": "1", "pf": "1", "pts": "26", "plus_minus": "-10", "created_at": "2019-05-28T19:42:55.321Z", "updated_at": "2019-05-28T19:42:55.321Z", "dnp": false, "game_id": 15661, "date": "20190225", "home_team": "BRK", "away_team": "SAS" }, { "id": 341635, "player_season_id": 9892, "mp": "21:10", "fg": "7", "fga": "12", "fg_pct": ".583", "fg3": "0", "fg3a": "0", "fg3_pct": "", "ft": "4", "fta": "4", "ft_pct": "1.000", "orb": "0", "drb": "3", "trb": "3", "ast": "1", "stl": "0", "blk": "2", "tov": "2", "pf": "4", "pts": "18", "plus_minus": "-10", "created_at": "2019-05-28T19:42:56.021Z", "updated_at": "2019-05-28T19:42:56.021Z", "dnp": false, "game_id": 15659, "date": "20190224", "home_team": "NYK", "away_team": "SAS" }, { "id": 341981, "player_season_id": 9892, "mp": "30:59", "fg": "2", "fga": "8", "fg_pct": ".250", "fg3": "0", "fg3a": "1", "fg3_pct": ".000", "ft": "2", "fta": "2", "ft_pct": "1.000", "orb": "4", "drb": "4", "trb": "8", "ast": "3", "stl": "1", "blk": "1", "tov": "2", "pf": "2", "pts": "6", "plus_minus": "0", "created_at": "2019-05-28T19:43:01.656Z", "updated_at": "2019-05-28T19:43:01.656Z", "dnp": false, "game_id": 15645, "date": "20190222", "home_team": "TOR", "away_team": "SAS" }, { "id": 342747, "player_season_id": 9892, "mp": "35:07", "fg": "8", "fga": "15", "fg_pct": ".533", "fg3": "0", "fg3a": "0", "fg3_pct": "", "ft": "6", "fta": "10", "ft_pct": ".600", "orb": "4", "drb": "7", "trb": "11", "ast": "2", "stl": "0", "blk": "3", "tov": "1", "pf": "5", "pts": "22", "plus_minus": "+16", "created_at": "2019-05-28T19:43:15.685Z", "updated_at": "2019-05-28T19:43:15.685Z", "dnp": false, "game_id": 15614, "date": "20190212", "home_team": "MEM", "away_team": "SAS" }, { "id": 343168, "player_season_id": 9892, "mp": "32:09", "fg": "5", "fga": "16", "fg_pct": ".313", "fg3": "1", "fg3a": "2", "fg3_pct": ".500", "ft": "4", "fta": "4", "ft_pct": "1.000", "orb": "3", "drb": "7", "trb": "10", "ast": "4", "stl": "0", "blk": "1", "tov": "0", "pf": "1", "pts": "15", "plus_minus": "-11", "created_at": "2019-05-28T19:43:23.062Z", "updated_at": "2019-05-28T19:43:23.062Z", "dnp": false, "game_id": 15597, "date": "20190209", "home_team": "UTA", "away_team": "SAS" }]


const abrines = [{ "id": 356256, "player_season_id": 9885, "mp": "13:47", "fg": "2", "fga": "6", "fg_pct": ".333", "fg3": "1", "fg3a": "5", "fg3_pct": ".200", "ft": "0", "fta": "0", "ft_pct": "", "orb": "0", "drb": "1", "trb": "1", "ast": "2", "stl": "1", "blk": "0", "tov": "0", "pf": "0", "pts": "5", "plus_minus": "0", "created_at": "2019-05-28T19:47:24.337Z", "updated_at": "2019-05-28T19:47:24.337Z", "dnp": false, "game_id": 15175, "date": "20181212", "home_team": "NOP", "away_team": "OKC" }, { "id": 355931, "player_season_id": 9885, "mp": "18:54", "fg": "0", "fga": "1", "fg_pct": ".000", "fg3": "0", "fg3a": "1", "fg3_pct": ".000", "ft": "0", "fta": "0", "ft_pct": "", "orb": "0", "drb": "0", "trb": "0", "ast": "0", "stl": "0", "blk": "0", "tov": "1", "pf": "0", "pts": "0", "plus_minus": "-1", "created_at": "2019-05-28T19:47:17.997Z", "updated_at": "2019-05-28T19:47:17.997Z", "dnp": false, "game_id": 15188, "date": "20181214", "home_team": "DEN", "away_team": "OKC" }, { "id": 355719, "player_season_id": 9885, "mp": "20:10", "fg": "2", "fga": "4", "fg_pct": ".500", "fg3": "0", "fg3a": "2", "fg3_pct": ".000", "ft": "2", "fta": "2", "ft_pct": "1.000", "orb": "0", "drb": "4", "trb": "4", "ast": "0", "stl": "0", "blk": "0", "tov": "0", "pf": "0", "pts": "6", "plus_minus": "+7", "created_at": "2019-05-28T19:47:14.135Z", "updated_at": "2019-05-28T19:47:14.135Z", "dnp": false, "game_id": 15196, "date": "20181215", "home_team": "OKC", "away_team": "LAC" }, { "id": 346260, "player_season_id": 9885, "mp": null, "fg": null, "fga": null, "fg_pct": null, "fg3": null, "fg3a": null, "fg3_pct": null, "ft": null, "fta": null, "ft_pct": null, "orb": null, "drb": null, "trb": null, "ast": null, "stl": null, "blk": null, "tov": null, "pf": null, "pts": null, "plus_minus": null, "created_at": "2019-05-28T19:44:19.002Z", "updated_at": "2019-05-28T19:44:19.002Z", "dnp": true, "game_id": 15462, "date": "20190121", "home_team": "NYK", "away_team": "OKC" }, { "id": 346119, "player_season_id": 9885, "mp": null, "fg": null, "fga": null, "fg_pct": null, "fg3": null, "fg3a": null, "fg3_pct": null, "ft": null, "fta": null, "ft_pct": null, "orb": null, "drb": null, "trb": null, "ast": null, "stl": null, "blk": null, "tov": null, "pf": null, "pts": null, "plus_minus": null, "created_at": "2019-05-28T19:44:16.624Z", "updated_at": "2019-05-28T19:44:16.624Z", "dnp": true, "game_id": 15467, "date": "20190122", "home_team": "OKC", "away_team": "POR" }, { "id": 345771, "player_season_id": 9885, "mp": null, "fg": null, "fga": null, "fg_pct": null, "fg3": null, "fg3a": null, "fg3_pct": null, "ft": null, "fta": null, "ft_pct": null, "orb": null, "drb": null, "trb": null, "ast": null, "stl": null, "blk": null, "tov": null, "pf": null, "pts": null, "plus_minus": null, "created_at": "2019-05-28T19:44:10.358Z", "updated_at": "2019-05-28T19:44:10.358Z", "dnp": true, "game_id": 15481, "date": "20190124", "home_team": "OKC", "away_team": "NOP" }, { "id": 345135, "player_season_id": 9885, "mp": "5:46", "fg": "1", "fga": "2", "fg_pct": ".500", "fg3": "1", "fg3a": "2", "fg3_pct": ".500", "ft": "0", "fta": "0", "ft_pct": "", "orb": "0", "drb": "1", "trb": "1", "ast": "0", "stl": "0", "blk": "0", "tov": "0", "pf": "1", "pts": "3", "plus_minus": "+4", "created_at": "2019-05-28T19:43:58.165Z", "updated_at": "2019-05-28T19:43:58.165Z", "dnp": false, "game_id": 15518, "date": "20190129", "home_team": "ORL", "away_team": "OKC" }, { "id": 344686, "player_season_id": 9885, "mp": "9:21", "fg": "0", "fga": "2", "fg_pct": ".000", "fg3": "0", "fg3a": "1", "fg3_pct": ".000", "ft": "0", "fta": "0", "ft_pct": "", "orb": "0", "drb": "0", "trb": "0", "ast": "0", "stl": "0", "blk": "0", "tov": "0", "pf": "1", "pts": "0", "plus_minus": "-8", "created_at": "2019-05-28T19:43:50.231Z", "updated_at": "2019-05-28T19:43:50.231Z", "dnp": false, "game_id": 15536, "date": "20190201", "home_team": "MIA", "away_team": "OKC" }, { "id": 344315, "player_season_id": 9885, "mp": null, "fg": null, "fga": null, "fg_pct": null, "fg3": null, "fg3a": null, "fg3_pct": null, "ft": null, "fta": null, "ft_pct": null, "orb": null, "drb": null, "trb": null, "ast": null, "stl": null, "blk": null, "tov": null, "pf": null, "pts": null, "plus_minus": null, "created_at": "2019-05-28T19:43:43.934Z", "updated_at": "2019-05-28T19:43:43.934Z", "dnp": true, "game_id": 15551, "date": "20190203", "home_team": "BOS", "away_team": "OKC" }, { "id": 343951, "player_season_id": 9885, "mp": null, "fg": null, "fga": null, "fg_pct": null, "fg3": null, "fg3a": null, "fg3_pct": null, "ft": null, "fta": null, "ft_pct": null, "orb": null, "drb": null, "trb": null, "ast": null, "stl": null, "blk": null, "tov": null, "pf": null, "pts": null, "plus_minus": null, "created_at": "2019-05-28T19:43:37.559Z", "updated_at": "2019-05-28T19:43:37.559Z", "dnp": true, "game_id": 15565, "date": "20190205", "home_team": "OKC", "away_team": "ORL" }]

{/* <PracticeVictory lines={lamarcus.reverse()} />
<PracticeVictory lines={abrines.reverse()} /> */}

// const comparison = [lamarcus, abrines]

class MainMenu extends React.Component {
    render() {
        return (
            <div className='ui container center aligned'>
                {this.props.seasons.map((season, idx) => {
                    let year = season.year
                    return (
                        <Link to={`/seasonhome/${year}`}>
                            <div className='ui centered card' key={idx} onClick={() => this.props.setSeason(year)} >
                                <div className="image">
                                    <img src={season.image} alt='' />
                                    {`${year - 1}-${year} Season`}
                                </div>
                            </div>
                        </Link>
                    )
                })}

            </div >

        )
    }
}

const mapStateToProps = (state) => {
    return { seasons: state.allSeasons }
}

export default connect(mapStateToProps, { setSeason })(MainMenu)
