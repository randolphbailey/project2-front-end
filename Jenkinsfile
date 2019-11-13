pipeline {
  agent {
    docker {
      image 'node:13-alpine'
      args '-p 20001-20100:3000'
    }
  }
  environment {
    CI = 'true'
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }
  stages {
    stage('Install Packages') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
        }
      }
    stage('Deployment') {
        steps {
         withAWS(region:'<your-bucket-region>',credentials:'AKIASXYWXTWIOZ6D2NER') {
           s3Delete(bucket: '<bucket-name>', path:'**/*')
           s3Upload(bucket: '<bucket-name>', workingDir:'build', includePathPattern:'**/*');
            }
          }
       }
    }
}
