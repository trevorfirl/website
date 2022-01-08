import './Styles/social_row.scss';
import React from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";

const SPACING = "mx-2 px-1";

function SocialRow(props) {
		return (
			<div className={`social-row ${props.className}`}>
				<span className={SPACING}>
					<SocialMediaIconsReact
						borderColor="rgba(200,200,200,1)"
						borderWidth="3"
						borderStyle="solid"
						icon="linkedin"
						iconColor="rgba(200,200,200,1)"
						backgroundColor="rgba(255,255,255,0)"
						iconSize="3"
						roundness="20%"
						url="https://www.linkedin.com/in/trevor-firl-336691211/"
						size="60"
					/>
				</span>
				<span className={SPACING}>
					<SocialMediaIconsReact
						borderColor="rgba(200,200,200,1)"
						borderWidth="3"
						borderStyle="solid"
						icon="github"
						iconColor="rgba(200,200,200,1)"
						backgroundColor="rgba(255,255,255,0)"
						iconSize="3"
						roundness="20%"
						url="https://github.com/trevorfirl"
						size="60"
					/>
				</span>
                <span className={SPACING}>
					<SocialMediaIconsReact
						borderColor="rgba(200,200,200,1)"
						borderWidth="3"
						borderStyle="solid"
						icon="facebook"
						iconColor="rgba(200,200,200,1)"
						backgroundColor="rgba(255,255,255,0)"
						iconSize="3"
						roundness="20%"
						url="https://www.facebook.com/trevorfirl/"
						size="60"
					/>
				</span>
                <span className={SPACING}>
					<SocialMediaIconsReact
						borderColor="rgba(200,200,200,1)"
						borderWidth="3"
						borderStyle="solid"
						icon="mail"
						iconColor="rgba(200,200,200,1)"
						backgroundColor="rgba(255,255,255,0)"
						iconSize="3"
						roundness="20%"
						url="mailto:trevor.firl@gmail.com"
						size="60"
					/>
				</span>
			</div>
		);
	}

export default SocialRow;
