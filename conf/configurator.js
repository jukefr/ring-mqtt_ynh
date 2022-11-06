// this is used to generate the config.json file
// pipe the output to a json file
// node configurator.js user pass port disarm_code > config.json

const [user, pass, port, disarm_code] = process.argv.slice(2);

const config = {
  mqtt_url: `mqtt://${user}${pass && ":" + pass}@localhost:${port || 1883}`,
  mqtt_options: "",
  livestream_user: "",
  livestream_pass: "",
  disarm_code: disarm_code || "",
  enable_cameras: true,
  enable_modes: false,
  enable_panic: false,
  hass_topic: "homeassistant/status",
  ring_topic: "ring",
  location_ids: [""],
};

console.log(JSON.stringify(config, null, 2));
