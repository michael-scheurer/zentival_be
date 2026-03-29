import type { Act } from '~/types/schema'

export function useActs() {
  const acts: Act[] = [
    {
      id: 'traf-2023',
      year: 2023,
      title: 'Traf',
      long_description:
        'TRAF is the story of two guys from Reims who share the same passion for music, medicine, road trips and extreme outdoor sports. In 2018, they create TRAF, an electro-organic music project tainted with Alps and Mediterranean inspirations.',
      image: 'traf',
      radioHtmlCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/3M1kdGJP7DlEBGPb1JtKJX?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
    {
      id: 'deserto-parallax-20244',
      year: 2024,
      title: 'Deserto Parallax',
      long_description:
        'Antike Sagen, dunkle Magier und Hirten, die mit dem Wind sprechen...Vor langer Zeit schon haben die Berner Troubadouren von Deserto Parallax zusammengefunden. Bereits vor ihrer Gründung im 2017 wüteten sie in verschiedenen Bands unter anderem bei “Artlu Bubble And The Dead Animal Gang”.\n' +
        '\n' +
        'Unterwegs in mediterranen Gefilden, schreiben Deserto Parallax jeweils ihre Songs, dort erfinden sie ihren “Folk Noir“. Das Gespann bedient sich dem Klischee des romantischen Anti-helden, ihre Lieder glühen voller Obskurität und Bizarrem. Die Winde der Wüste heben zu klagen an…',
      image: 'desertoParallax',
      radioHtmlCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/2ZPFlyT4qT3CvOuhiHHG6i?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
    {
      id: 'cablesalad-2024',
      year: 2024,
      title: 'Cablesalad',
      long_description:
        'Cablesalad plays electronic music with driving beats, spherical sounds, acoustic instruments, vocals and fat synth lines. The sound seamlessly traverses genres between electronic and pop, incorporating influences from jazz, rock, and ambient.\n' +
        'The duo engages in a transdisciplinary approach, combining light, dance, performance, video art, and sound design.\n' +
        '\n' +
        'The project gained traction with its debut single and the accompanying music video, "dancemorethinkless," leading to performances on various Swiss stages in 2022/23.\n' +
        'Now, in 2024, the debut album titled "Timecapsule" is set to release. The music is dynamic, melancholic, dreamy, yet also stirring, honest, and passionate. Themes revolve around loneliness, isolation, performance pressure, capitalism, political fights, hope, and tenderness. In the quest for captivating sounds and lyrics, life is turned upside down. Everyday noises are recorded and modified, transforming chips into snares and passing trains into a resonant roar, promising fat basslines from fans.',
      image: 'cableSalade',
      radioHtmlCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/01jP180O9uunDRCP1bfzCi?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
    {
      id: 'sims-2025',
      year: 2025,
      title: `Sim's`,
      long_description: `Sim’s offer an original rap, far from being bling-bling clichés. Sim grips the verb with poetry, rage with nostalgia. In his latest album “Il reste la chaleur” released in 2014 or on stage, the rapper from Jura region is surrounded by his loyal five musicians, Les Repentis. Together they offer a hip-hop show, stained with soul, funk, reggae and rock. Since early 2000s, Sim’s traverses Swiss scenes with the strength and vigor of a teenager, long time gone. In concert or on studio, listen to Sim is to enter a particular universe: sometimes melancholic lyrics, sometimes light, but always thoughtful, enhanced by a fearless musicality.`,
      image: 'sims',
      radioHtmlCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/0nzYljzvorgcRYYSyBJMro?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
    {
      id: 'irie-2025',
      year: 2025,
      title: 'irié',
      long_description: `IRIÉ is a duo project by two musicians combining electronic music with their vocals. While  the singers and sound producers Gabriella Plumettaz and Niria Kaufmann are based in Switzerland, the duo passionately embraces their Brazilian roots, seamlessly blending these influences into a musical journey that transcends boundaries.
        They combine deep bass, electrifying rhythms and delicate acoustics, characterised by electronica, hybrid sounds, and take their listeners to other worlds with their atmospheric, quivering and energetic performance`,
      image: 'irie',
      radioHtmlCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/564CtRxk0r5AI2wILWAQOm?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
    {
      id: 's-wings-2025',
      year: 2025,
      title: 'S-Wings',
      long_description:
        'Wir sind Simosura und Shantie, ein kreatives Luftakrobatik-Duo mit einer gemeinsamen Leidenschaft für die Kunst in all ihren Facetten. Unsere Wurzeln liegen im Tanz, Schauspiel und in der Welt der Bühnenkunst. Am liebsten verbinden wir verschiedene Disziplinen, um etwas Einzigartiges zu erschaffen – Kunst, die bewegt und berührt.',
      image: 'swings',
      radioHtmlCode: `<style>
        .responsive-video {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 aspect ratio (9/16 = 0.5625) */
          height: 0;
          overflow: hidden;
        }
        
        .responsive-video iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
        </style>
        
        <div class="responsive-video">
          <iframe 
            src="https://www.youtube.com/embed/plbEVQ45aDU?si=BCvtWZ3cc66Asbv3&amp;controls=1" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>`,
    },
    {
      id: 'seth-schwarz-2026',
      year: 2026,
      title: 'Seth Schwarz',
      long_description: `Often it’s those who enter the scene from a different background who take the evolution of music to the next level. Seth Schwarz is one of them. His powerful productions meet the expectations of the dance floor, but also break the circle of imitation and repetition. By merging the concepts of electronic music and classic composition he creates mighty bangers of truly symphonic dimensions.`,
      image: 'sethSchwarz',
      radioHtmlCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/0zUt9PboFsELRcvO7UWarr?theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
    {
      id: 'stevo-2026',
      year: 2026,
      title: 'Stevo Atambire & World Citizen',
      long_description: `is made up of seven passionate and professional musicians from Ghana and Switzerland who combine West African and European musical traditions to create a unique cultural experience. Fusing traditional Ghanaian sounds with electronic influences and dynamic brass arrangements, they build a fascinating musical bridge between two worlds. Their live performances ignite dance floors, creating an exhilarating experience for audiences. In January 2024, they embarked on a Ghana Tour, performing in all major cities and delivering a powerful performance at the "New Year New Tradition Festival," an annual event organized by Stevo Atambire in his hometown, Bolgatanga. Following the success of the Ghana tour, the band enjoyed a highly successful tour across Switzerland in the summer of 2024, captivating audiences with their energetic fusion of styles. Personnel: Stevo Atambire / Vocals & Kologo David Odoom Jnr. / Percussion Dominic Eschmann / Drums Bruno Hochstrasser / Guitar & Bass Valerio Lepori / Trombone Nicolas Jäger / Trumpet Roger Greipl / Saxophone`,
      image: 'stevo',
      radioHtmlCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/6gbEfMzGr0anNu4sKlXZye?theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    },
    // {
    //   id: 'nemie-2026',
    //   year: 2026,
    //   title: 'Némie',
    //   long_description: `Eine Nacht. Eine Bühne. Drei Bands. Ein Tanz. Das ist unser Zentival. Am östlichen Stadtrand Berns, eingebettet zwischen Industriecharme und Wohnquartier.`,
    //   image: 'nemie',
    //   radioHtmlCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/5NJLIXfOQfRgUz8KKC2yzu?theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    // },
  ]

  async function getActs({
    mode,
  }: {
    mode: 'current' | 'past'
  }): Promise<Act[]> {
    const year = new Date().getFullYear()
    return acts
      .sort((a, b) => b.year - a.year)
      .filter((act) => {
        if (mode === 'current') {
          return act.year === year
        } else {
          return act.year < year
        }
      })
  }

  return {
    getActs,
  }
}
