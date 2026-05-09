pipeline {
  agent any

  options {
    skipDefaultCheckout(true)
  }

  parameters {
    string(name: "REPO_URL", defaultValue: "https://github.com/Farouk-Osman/Cloud-Computing-Task4.git", description: "Git repository URL")
    string(name: "BRANCH", defaultValue: "main", description: "Branch to build")
  }

  stages {
    stage("Clone/Pull Repository") {
      steps {
        deleteDir()
        git url: params.REPO_URL, branch: params.BRANCH
      }
    }

    stage("Install Dependencies") {
      steps {
        script {
          if (isUnix()) {
            sh "npm install"
          } else {
            bat "npm install"
          }
        }
      }
    }

    stage("Build project") {
      steps {
        script {
          if (isUnix()) {
            sh "npm run build"
          } else {
            bat "npm run build"
          }
        }
      }
    }

    stage("Run Unit Tests") {
      steps {
        script {
          if (isUnix()) {
            sh "npm test"
          } else {
            bat "npm test"
          }
        }
      }
    }
  }
}
