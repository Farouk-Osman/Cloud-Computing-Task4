pipeline {
  agent any

  options {
    skipDefaultCheckout(true)
  }

  parameters {
    string(name: "REPO_URL", defaultValue: "https://github.com/Farouk-Osman/Cloud-Computing-Task4", description: "Git repository URL")
    string(name: "BRANCH", defaultValue: "master", description: "Branch to build")
  }

  stages {
    stage("Clone/Pull Repository") {
      steps {
        deleteDir()
        git url: params.REPO_URL, branch: params.BRANCH
      }
    }

    stage("Setup Bun") {
      steps {
        script {
          if (isUnix()) {
            sh """
              if ! command -v bun >/dev/null 2>&1; then
                curl -fsSL https://bun.sh/install | bash
              fi
              export BUN_INSTALL=\"$HOME/.bun\"
              export PATH=\"$BUN_INSTALL/bin:$PATH\"
              bun --version
            """
          } else {
            bat """
              where bun >nul 2>nul
              if %ERRORLEVEL% NEQ 0 (
                powershell -NoProfile -ExecutionPolicy Bypass -Command "iwr https://bun.sh/install.ps1 -useb | iex"
              )
              set "PATH=%USERPROFILE%\\.bun\\bin;%PATH%"
              bun --version
            """
          }
        }
      }
    }

    stage("Install Dependencies") {
      steps {
        script {
          if (isUnix()) {
            sh """
              export BUN_INSTALL=\"$HOME/.bun\"
              export PATH=\"$BUN_INSTALL/bin:$PATH\"
              bun install
            """
          } else {
            bat """
              set "PATH=%USERPROFILE%\\.bun\\bin;%PATH%"
              bun install
            """
          }
        }
      }
    }

    stage("Build project") {
      steps {
        script {
          if (isUnix()) {
            sh """
              export BUN_INSTALL=\"$HOME/.bun\"
              export PATH=\"$BUN_INSTALL/bin:$PATH\"
              bun run build
            """
          } else {
            bat """
              set "PATH=%USERPROFILE%\\.bun\\bin;%PATH%"
              bun run build
            """
          }
        }
      }
    }

    stage("Run Unit Tests") {
      steps {
        script {
          if (isUnix()) {
            sh """
              export BUN_INSTALL=\"$HOME/.bun\"
              export PATH=\"$BUN_INSTALL/bin:$PATH\"
              bun run test
            """
          } else {
            bat """
              set "PATH=%USERPROFILE%\\.bun\\bin;%PATH%"
              bun run test
            """
          }
        }
      }
    }
  }
}
