pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    docker.image('node:14').inside {
                        sh 'npm install'
                    }
                }
            }
        }

        /*stage('Test') {
            steps {
                script {
                    docker.image('node:14').inside {
                        sh 'npm test'
                    }
                }
            }
        }*/

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("saber69/weather-app")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image("saber69/weather-app:${env.BUILD_ID}").push()
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    kubernetesDeploy(
                        kubeconfigId: 'your-kubeconfig-credentials',
                        configs: 'k8s/deployment.yaml',
                        enableConfigSubstitution: true
                    )
                }
            }
        }
    }
}
