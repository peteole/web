import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Button from '../../components/freestanding/button/button'
import {
  PropTypes as TeamProps,
  SocialNetworks
} from '../../components/layouts/team/team'
import { PropTypes as TeamImgProps } from '../../components/layouts/team/team-image'

export const team: TeamProps = {
  id: 'shared.team',
  background: 'dark',
  title: (
    <>
      The best team <span className={'is-mute-text'}>for the job</span>
    </>
  ),
  text: (
    <>
      Our mission is to provide a common access control, authorization and
      identity infrastructure that manages IAM and the associated data created
      in cloud applications. And we've got just the right people for the job -{' '}
      <Button to={'/jobs'} style={'link-inline'}>
        join our team
      </Button>{' '}
      and find out why.
    </>
  ),
  team: [
    {
      name: 'Aeneas Rekkas',
      position: 'Engineering, Co-founder',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/aeneasr'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/aeneasr'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Aeneas Rekkas"
          src="../../images/team/aeneas.png"
        />
      )
    },
    {
      name: 'Thomas Aidan Curran',
      position: 'Product, Co-Founder',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/tacurran'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/thomasaidancurran/'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Thomas Aidan Curran"
          src="../../images/team/thomas.png"
        />
      )
    },
    {
      name: 'Patrik Neu',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/zepatrik'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Patrik Neu"
          src="../../images/team/patrik.png"
        />
      )
    },
    {
      name: 'John Curran',
      position: 'Design',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/jfcurran'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="John Curran"
          src="../../images/team/john.png"
        />
      )
    },
    {
      name: 'Vincent Kraus',
      position: 'Developer Relations',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/vinckr'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Vincent Kraus"
          src="../../images/team/vincent.png"
        />
      )
    },
    {
      name: 'Andreas Bucksteeg',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/tricky42'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Andreas Bucksteeg"
          src="../../images/team/andreas.png"
        />
      )
    },
    {
      name: 'Piotr Mścichowski',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/piotrmsc'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/piotr-mscichowski/'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Piotr Mścichowski"
          src="../../images/team/piotr.png"
        />
      )
    },
    {
      name: 'Jakub Blaszczyk',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/Demonsthere'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/jakub-błaszczyk-31b786129/'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Jakub Blaszczyk"
          src="../../images/team/jakub.png"
        />
      )
    },
    {
      name: 'Alano Terblanche',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/Benehiko'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Alano Terblanche"
          src="../../images/team/alano.png"
        />
      )
    },
    {
      name: 'Grant Zvolský',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/grantzvolsky'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Alano Terblanche"
          src="../../images/team/grant.png"
        />
      )
    },
    {
      name: 'Tobias Sahl',
      position: 'Digital Marketing',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/blueacidfrog'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/tobias-sahl-8a553189/'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Tobias Sahl"
          src="../../images/team/tobias.png"
        />
      )
    },
    {
      name: 'Michael Leyman',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/micleyman'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Michael Leyman"
          src="../../images/team/michael.png"
        />
      )
    },
    {
      name: 'Rinor Gashi',
      position: 'Digital Marketing',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/RinorG'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/rinor-gashi-1aab781bb/'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Rinor Gashi"
          src="../../images/team/rinor.png"
        />
      )
    },
    {
      name: 'Anirudh Oppiliappan',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/icyphox'
        },
        {
          network: SocialNetworks.web,
          href: 'https://icyphox.sh'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Anirudh Oppiliappan"
          src="../../images/team/anirudh.png"
        />
      )
    },
    {
      name: 'Leonie Habermann',
      position: 'Operations',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/haberml'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/leonie-habermann-261551b8/'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Leonie Habermann"
          src="../../images/team/leonie.png"
        />
      )
    },
    {
      name: 'Rebecca Gong',
      position: 'Finance',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/RebeccaGong'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://linkedin.com/in/rebecca-qian-g-24b86b16'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Rebecca Gong"
          src="../../images/team/rebecca.png"
        />
      )
    },
    {
      name: 'Andrew Minkin',
      position: 'Developer Relations',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/gen1us2k'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Andrew Minkin"
          src="../../images/team/andrew.png"
        />
      )
    },
    {
      name: 'Marwin Härttrich',
      position: 'Digital Marketing',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/marwinhaerttrich'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Marwin Härttrich"
          src="../../images/team/marwin.png"
        />
      )
    },
    {
      name: 'Adam Wałach',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/adamwalach'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/adamwalach/'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Adam Wałach"
          src="../../images/team/adam.png"
        />
      )
    },
    {
      name: 'Ferdynand Naczynski',
      position: 'Engineering',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/nipsufn'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Ferdynand Naczynski"
          src="../../images/team/ferdynand.png"
        />
      )
    },
    {
      name: 'Tomasz Papiernik',
      position: 'Technical Writing',
      social: [
        {
          network: SocialNetworks.github,
          href: 'https://github.com/tomekpapiernik'
        },
        {
          network: SocialNetworks.linkedin,
          href: 'https://www.linkedin.com/in/tomekpapiernik/'
        }
      ],
      img: (
        <StaticImage
          placeholder="blurred"
          layout="constrained"
          aspectRatio={1}
          loading="lazy"
          className="responsive"
          alt="Tomasz Papiernik"
          src="../../images/team/tomasz.png"
        />
      )
    }
  ]
}

export const community: TeamImgProps = {
  id: 'shared.community',
  slant: true,
  background: 'grey',
  title: (
    <>
      The best community <span className={'is-mute-text'}>in the world</span>
    </>
  ),
  text: (
    <>
      Ory is a community of collaborators, friends, and makers of wonderful
      software. The Ory Community works together to create useful products. We
      thank everyone involved - submitting new ideas, sending bug reports,
      writing feature requests, patching code, and sponsoring our work.
    </>
  ),
  img: (
    <img
      loading="lazy"
      alt="The Ory Community"
      className="responsive"
      src="https://opencollective.com/ory/contributors.svg?avatarHeight=24&width=1300&button=false&limit=1020"
    />
  )
}
