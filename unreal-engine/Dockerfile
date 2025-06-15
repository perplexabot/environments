FROM ubuntu:22.04

ARG DEBIAN_FRONTEND=noninteractive

ARG unreal_zip_local_path=./Linux_Unreal_Engine_5.6.0.zip 
ARG unreal_deploy_path="/opt/unreal-engine/"
ARG default_user="unreal_user"

RUN adduser --home /home/${default_user}/ --shell /bin/bash --disabled-password ${default_user}

RUN mkdir -p ${unreal_deploy_path}

ADD --chown=${default_user} ${unreal_zip_local_path} ${unreal_deploy_path}

RUN apt update && apt install -y neovim git curl zip

RUN cd ${unreal_deploy_path} && \
    unzip *.zip -d ${unreal_deploy_path} && \
    rm -rf ${unreal_deploy_path}/*.zip

RUN apt update && \
    apt install -y mesa-vulkan-drivers ubuntu-drivers-common && \
    ubuntu-drivers install nvidia:570

RUN ln -s ${unreal_deploy_path}/Engine/Binaries/Linux/UnrealEditor /usr/local/bin/UnrealEditor 

RUN apt install vulkan-tools

WORKDIR /unreal-project/

USER ${default_user}

CMD ["/bin/bash"]
