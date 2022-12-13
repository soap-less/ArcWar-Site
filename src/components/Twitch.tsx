import { useRef } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';
import type { TwitchEmbedInstance } from 'react-twitch-embed'

export default function Twitch() {
    const embed = useRef<TwitchEmbedInstance>();

    return <div className="flex flex-col items-center py-10">
        <TwitchEmbed channel="ivc_esports" autoplay muted withChat darkMode={false} hideControls onVideoReady={(e) => embed.current = e} className="w-full lg:w-8/12" style={{minHeight: "480px"}} />
    </div>
}