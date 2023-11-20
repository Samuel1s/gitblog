import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import {
  ProfileDescriptionContent,
  ProfileLinks,
  ProfileContainer,
  ProfileBioContent,
} from './styles'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

interface Profile {
  name?: string | 'Profile name'
  avatar_url?: string | 'Avatar Img'
  bio?: string | 'Bio'
  company?: string | 'Company name'
  login?: string | 'Github login'
  followers?: number | 0
  html_url?: string | 'https://github.com/Samuel1s'
}

export function Profile() {
  const [profileData, setProfileData] = useState<Profile>({})

  async function getProfileDataFromAPI(query: string) {
    try {
      const { data } = await api.get(query)

      setProfileData(data)
    } catch (error) {
      setProfileData({})
    }
  }

  useEffect(() => {
    getProfileDataFromAPI('users/samuel1s')
  }, [])

  return (
    <ProfileContainer>
      <img src={profileData.avatar_url} alt="Imagem do perfil do usuário" />
      <ProfileDescriptionContent>
        <ProfileBioContent>
          <h2>{profileData.name}</h2>
          <a href={profileData.html_url} target="_blank" rel="noreferrer">
            GITHUB &nbsp;
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileBioContent>
        <p>{profileData.bio}</p>
        <ProfileLinks>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            &nbsp; {profileData.login} &nbsp; &nbsp;
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            &nbsp; {profileData.company} &nbsp; &nbsp;
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            &nbsp; {profileData.followers} seguidores
          </span>
        </ProfileLinks>
      </ProfileDescriptionContent>
    </ProfileContainer>
  )
}
