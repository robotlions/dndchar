import { Button } from "react-bootstrap";


export const LawOrChaos = (props) => {

    
    return(
     <>
       
        <div
          className={
            props.fontThemeFantasy === false
              ? "container font-standard"
              : "container font-fantasy"
          }
          style={{ textAlign: "center" }}
        >
          <h5 style={{ paddingTop: "20px", marginBottom: "20px" }}>
            Would you like to create your Dungeons and Dragons 3.5 character in{" "}
            <strong>lawful mode</strong> or <strong>chaotic mode</strong>?
          </h5>

          <div className="row">
            <div className="col-lg-6" style={{ marginBottom: "10px" }}>
              <p>
                <h4 style={{ fontFamily: props.fontCheck }}>Lawful Mode</h4>Roll random
                ability scores and create a first-level character in accordance
                with the 2003 <em>Player's Handbook</em>.
              </p>
              <div className="row">
                <div className="col">
                  <Button
                    variant="secondary"
                    onClick={() => props.setModeChosen(true)}
                  >
                    Lawful
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <p>
                <h4 style={{ fontFamily: props.fontCheck }}>Chaotic Mode</h4> Manually set
                level and ability scores. Start with a million silver. We
                disavow all characters made this way.
              </p>
              <div className="row">
                <div className="col">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      props.setMunchkinMode(true);
                      props.setModeChosen(true);
                    }}
                  >
                    Chaotic
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}