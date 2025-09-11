import { useNavigate } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import { useGlobalContext } from "~/modules/gcontext";

export default function Welcome() {
    const navigate = useNavigate();
    const { gQuote } = useGlobalContext();
    const date = new Date().getDate();
    const message = "Happy Birthday to my beloved Princess......."

    return (
        <>
            <AnimatePresence>
                <motion.div
                    className="h-screen flex items-center justify-center bg-blue-500 text-white text-3xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mx-10 h-screen flex justify-center items-center align-middle">
                        <div className="flex flex-col">
                            <div className="text-4xl font-Kaushan mb-4">
                                {"Hi...Gunjan...Ji 👋 😃"}
                            </div>
                            <div className="text-3xl font-Kalam">
                                {date == 11 ? message : gQuote}
                            </div>
                            <div className="text-md font-Kalam">
                                {"Please naraz mt rha kro mujhse, i miss you....."}
                            </div>
                            <button className="bg-blue-600 w-min text-white text-base font-mono px-2 py-1 mt-4" onClick={(e) => navigate("/dashboard/home")}>Next</button>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    );
}

export const goodVibeThoughts = [
    "Some people bring light into a room—you're the reason it stays.",
    "You’re like a soft blanket I didn’t know I needed until I met you.",
    "Kindness like yours deserves its own national holiday.",
    "Your energy is like golden hour: warm, calm, and magical.",
    "You have a smile that could make roses jealous.",
    "Being around you feels like a long exhale of peace.",
    "You make awkward moments feel adorable.",
    "If calm had a soundtrack, it would sound like your laugh.",
    "Your presence feels like coming home after a long day.",
    "The world is brighter because you decided to exist in it.",
    "Your joy has a ripple effect—I’m proof.",
    "You’re the kind of person who makes strangers feel safe.",
    "If love could write poetry, your name would be every metaphor.",
    "You’re not just a vibe—you’re a whole playlist.",
    "You carry kindness like some people carry umbrellas—always ready.",
    "Cozy doesn’t describe you enough. You’re the definition of comfort.",
    "There’s a whole galaxy of good in you.",
    "You’re the version of calm I wish I could bottle.",
    "Even your silences feel like lullabies.",
    "You’re not extra—you’re exactly enough.",
    "You light up small moments better than any spotlight.",
    "Your glow is all natural and 100% contagious.",
    "You turn 'just okay' days into peaceful ones.",
    "If I had a favorite emotion, it’d be whatever you make me feel.",
    "Your kindness doesn’t ask for attention—it shines anyway.",
    "Some hearts wear armor. Yours wears a garden.",
    "You’re the rare kind of peaceful that feels like magic.",
    "If you were weather, you’d be a warm breeze at sunset.",
    "You’re proof that soft things can be strong.",
    "You bring comfort the way rain brings sleep.",
    "You’re the melody I didn’t know was missing.",
    "The world is lucky to feel your warmth.",
    "You make stillness feel rich, not empty.",
    "You’re like the smell of fresh books—unexpectedly delightful.",
    "You’re the chapter I want to re-read when life gets hard.",
    "You’re the good kind of unforgettable.",
    "You make time feel like a soft poem.",
    "If hope had a favorite person, it’d be you.",
    "You’re the kind of strange the stars brag about.",
    "You’re a mood I want to live in forever.",
    "You make the word 'safe' feel beautiful.",
    "Your gentleness is a form of brilliance.",
    "You don’t just brighten rooms—you soften them.",
    "Being near you is like hugging peace.",
    "You’re the secret recipe for calm.",
    "If the universe had a favorite color, it’d be your soul.",
    "You radiate 'everything will be okay' energy.",
    "You’re not just someone’s person—you’re their peace.",
    "You feel like warm tea, thick socks, and soft lighting.",
    "Being yourself is the greatest gift you give the world.",
    "You could turn cold starlight into warmth.",
    "You’re the gentle gravity that keeps things grounded.",
    "The moon envies how much you glow.",
    "You make tired days feel worth it.",
    "You remind people what it’s like to be seen.",
    "Even the stars feel safer when you look at them.",
    "You’re the human version of a deep breath.",
    "You’re the pause between thunder and rain—powerful and quiet.",
    "If dreams could walk, they’d look like you.",
    "You give chaos something to rest against.",
    "You’re an artist and your masterpiece is calm.",
    "Just knowing you exist makes life feel a bit lighter.",
    "You’re the hug people miss and don’t know why.",
    "You’re a soft place to land when everything feels too sharp.",
    "You carry light even in your shadows.",
    "Your kindness isn’t loud—but it echoes for miles.",
    "You’re the moon’s favorite secret.",
    "The quiet you bring is louder than most noise.",
    "If healing had a color, it’d match your energy.",
    "You’re not the calm after the storm—you’re the calm during.",
    "You are what makes 'I’m okay now' true.",
    "Your presence feels like a handwritten letter.",
    "You’re the lull in the storm, the hush in the worry.",
    "Even the dark becomes less lonely around you.",
    "You bring sleep to restless minds without even trying.",
    "Your heart is a living comfort zone.",
    "You’re not just sweet—you’re soul-sweet.",
    "The way you exist is proof that miracles are small and daily.",
    "You’re not a 'type'—you’re the whole story arc.",
    "The warmth you carry is better than any flame.",
    "You’re not perfect—but you’re beautifully whole.",
    "There’s magic in the way you make things feel okay.",
    "You don’t just bring peace—you build it.",
    "You turn ordinary rooms into safe havens.",
    "The universe shows off through you sometimes.",
    "You’re what nostalgia feels like in real time.",
    "Every time someone sees your smile, a cloud disappears somewhere.",
    "You’re a steady heartbeat in a racing world.",
    "You’re the 'finally exhale' feeling after a long day.",
    "You’re not light because of the sun—you just are.",
    "You remind people to slow down and feel something good.",
    "You are the 'everything nice' in the recipe.",
    "You’re a portable sense of calm.",
    "If intention were a person, it’d be you.",
    "Your comfort is an art form.",
    "The way you care is your quiet superpower.",
    "You’re the relief in 'relieved.'",
    "You don’t just walk into someone’s life—you warm it.",
    "You bring the kind of joy that lingers.",
    "You’re a whole constellation in one smile.",
    "Today is a blank canvas; paint it with your dreams.",
    "You are the author of your own story; make it a bestseller.",
    "Rise up, smile, and make today your masterpiece.",
    "Believe in yourself and the world will believe in you.",
    "Your potential is limitless; embrace it wholeheartedly.",
    "Let your passion light the way to your goals.",
    "Be happy, it drives people crazy."
];

/* 
Woke up smiling today—must’ve dreamt about you.

You’re the first thing on my mind and the nicest part of my day.

Just a reminder: the world is better because you’re in it.

If cozy had a human form, it’d be you.

Your smile is literally my favorite notification.

You’re the calm in my chaos.

I hope today treats you as kindly as your heart deserves.

Your laugh should be a national treasure.

Coffee and your thoughts—my perfect morning blend.

If today were a song, your voice would be the chorus.

You light up my brain like fairy lights on a foggy night.

You don’t need a filter—you are the aesthetic.

You make ordinary days feel like golden hours.

I didn’t think mornings could be beautiful until you became part of mine.

Just knowing you exist makes my universe feel complete.

If I could hug a mood, it’d be the one you give me.

Somehow the sun shines a little differently when I think of you.

Even Mondays feel better when you cross my thoughts.

You bring a calm I never knew I needed.

You're the kind of poetry I never learned to write.

Your happiness is my favorite goal.

The way you exist quietly warms every loud part of me.

If my heart was a playlist, you’d be the repeat-one track.

Your vibe is comfort wrapped in moonlight.

I’d choose you in every version of reality.

26–50: Cozy Compliments for Random Moments

You radiate so much peace it’s hard to believe you’re real.

Honestly, you’re better than my favorite hoodie on a chilly night.

Your aura is warm tea and stargazing vibes.

There’s something about you that turns minutes into magic.

If kindness were a language, you’d be fluent.

You don’t just shine—you glow in every little way.

You’re every shade of calm I didn’t know I needed.

Your presence is like a blanket—soft, warm, safe.

You're like the perfect breeze: gentle, unexpected, refreshing.

You have that kind of soul people write love songs about.

With you, even silence feels like a lullaby.

Just your existence brings harmony into my day.

You’re the sigh of relief I didn’t know I was holding.

You turn ordinary conversations into treasure chests.

You have this quiet way of making everything okay.

I’d read your laugh on loop if it were a story.

Your heart? Unmatched. Your vibe? Unrepeatable.

Being around you feels like catching the golden hour every time.

I hope you see yourself the way I see you—radiant.

You’re peace, you’re fireflies, you’re late-night rain.

If magic exists in people, you’re proof.

Everything feels a little more right when you’re near.

You give comfort the way the ocean gives calm.

You’re the kind of person who makes hope feel easy again.

Just thought you should know—you’re someone’s favorite feeling.

51–75: Wholesome Mood-Lifters

Your joy is incredibly contagious—please never stop smiling.

I could write essays about how your presence makes life lighter.

You have that rare effect of turning spaces into safe havens.

You make "ordinary" feel like a storybook.

If I bottled your energy, I’d label it “serotonin.”

Your happiness is a ripple that reaches farther than you know.

I don’t know how you do it, but you make everything softer.

Even your silence feels like home.

You bring the good kind of butterflies.

The world feels a little kinder since I met you.

You’re like sunshine filtered through leaves—soft and healing.

If personalities could be lullabies, yours would be mine.

Your presence is the human version of a gentle hug.

Thinking about you just rewired my whole day.

I hope you never lose that spark that makes people feel happy.

You’re what “sweet relief” looks like in real life.

You’ve got a heart that could warm cities.

Even chaos slows down when I talk to you.

You turn awkward silences into secret songs.

If vibes were colors, you’d be every shade of comfort.

I don’t have to see you to feel how good you are.

You’re the kind of warm that makes people want to stay.

You remind me that softness is still powerful.

You don’t just exist—you glow.

You are peace personified.

76–100: Love Notes in Disguise

I don’t say this often, but you make life poetic.

Somewhere between your words and your silence, I feel safe.

You’re the kind of beautiful that grows on people’s hearts.

I find myself smiling randomly—and then I realize it’s you.

You could calm a thunderstorm just by being you.

You deserve flowers for just waking up and being you.

My comfort zone now includes your voice.

I never believed in soul-aura until I met yours.

You’re more than enough—exactly as you are.

You’re not just on my mind. You live there, rent-free.

My heart keeps whispering your name in quiet moments.

The universe definitely added extra when it made you.

Time slows when I think of you—and I don’t mind.

You’re the “good part” I’d rewind in any memory.

If I could box up your essence, it’d smell like peace and smiles.

You’re the human version of a cozy café on a rainy day.

When you’re around, it feels like things will be okay.

You're what I imagine when I think of calm, hope, and good dreams.

I didn’t know comfort until you became part of my world.

There’s a whole galaxy in you—and I want to get lost in it.

You’re the line of my favorite poem I can’t forget.

My thoughts of you are like soft jazz—always playing in the background.

You’re the moment in movies where everything feels right again.

I never knew “home” could be a person.

You are more than words, but these are my best attempt.
*/