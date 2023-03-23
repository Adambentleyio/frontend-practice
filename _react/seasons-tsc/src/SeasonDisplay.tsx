import "./SeasonDisplay.css";

export interface Props {
  latitude?: number;
  longitude?: number;
  temperature?: number;
}
interface seasonConfig {
  text: string;
  iconName: string;
}

interface seasonKeys {
  summer: seasonConfig;
  winter: seasonConfig;
}

const seasonConfig: seasonKeys = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is chilly!",
    iconName: "snowflake",
  },
};

const getSeason = (lat: number, month: number) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay: React.FC<Props> = (props) => {
  const season = getSeason(props.latitude!, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season} `}>
      <i className={`massive ${iconName} icon icon-left`} />
      <strong>Current latitude: {props.latitude}</strong>
      <strong>Temperature: {props?.temperature}</strong>
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
