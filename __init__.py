# Geiru Protection LoRA (experimental). Moved out of the Geiru Context Suite.
# Needs the Geiru Context Suite installed: it reads the protection switch from Geiru Context's latent.
# The internal node name (H3ClownProtectionLora) is unchanged, so workflows saved with the suite version still load.
from .geiru_protection_lora import NODE_CLASS_MAPPINGS, NODE_DISPLAY_NAME_MAPPINGS

WEB_DIRECTORY = "./web"
__all__ = ["NODE_CLASS_MAPPINGS", "NODE_DISPLAY_NAME_MAPPINGS", "WEB_DIRECTORY"]
